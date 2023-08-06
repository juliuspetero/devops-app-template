const express = require('express');
const winston = require("winston");

const app = express();
app.use(express.json());

const logConfiguration = {
    'transports': [
        new winston.transports.Console()
    ]
};
const LOGGER = winston.createLogger(logConfiguration);

app.get("", (req, res) => {

    LOGGER.info("DLR REQUEST BODY");
    LOGGER.info("============================");
    LOGGER.info(req.body);

    LOGGER.info("DLR REQUEST HEADERS");
    LOGGER.info("===========================");
    LOGGER.info(req.headers);

    res.status(200).send({
        "message": "Hello World"
    }
    );
});

const PORT = process.env.SERVER_PORT || 4002;

app.listen(PORT, () => {
    LOGGER.info(`Server started @ http://localhost:${PORT}`);
})
