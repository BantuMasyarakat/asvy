const express = require("express");
const req = require("express/lib/request");
const port = 3000;
const app = express();
const fs = require("fs");
const PDFDocument = require("pdfkit");
const blobStream = require("blob-stream");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("./index.ejs");
});

app.get("/start", (req, res) => {
    res.render("./start.ejs", {
        count: req.query.count,
    });
});

app.post("/generate", (req, res) => {
    const text = req.body.text;
    const key = req.body.key;
    let stream = res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment;filename=" + req.body.title + ".pdf",
    });

    // create PDF file
    const doc = new PDFDocument();

    doc.on("data", (chunk) => stream.write(chunk));
    doc.on("end", () => stream.end());

    doc.font("Times-Roman").fontSize(24).text(req.body.title, {
        align: "center",
        stroke: "#FFFFFF",
        fill: "#FFFFFF",
        lineGap: 15,
    });

    text.forEach((e, i) => {
        doc.font("Times-Roman")
            .fontSize(12)
            .text("Slide " + (i + 1) + " ( " + key[i] + " )", {
                align: "left",
                lineGap: 15,
                fill: "#FFFFFF",
                stroke: "#FFFFFF",
            });

        doc.font("Times-Roman").fontSize(12).text(e, {
            indent: 30,
            align: "justify",
            lineGap: 7,
            fill: "#FFFFFF",
        });
    });

    // Finalize PDF file
    doc.end();
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
