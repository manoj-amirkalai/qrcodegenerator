import React, { useState } from "react";
import "./App.css";
import QRCode from "qrcode";
import {
  Container,
  Card,
  CardContent,
  Button,
  Grid,
  TextField,
} from "@material-ui/core";

function App() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const generateQrcode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Card>
        <h2 className="title">QR Code Generator</h2>
        <CardContent>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <h1>
              Enter
              <TextField onChange={(e) => setText(e.target.value)} />
            </h1>
            <Button
              className="buttn"
              variant="contained"
              color=" primary"
              onClick={() => generateQrcode()}
            >
              Generate
            </Button>
            <br />
            <br />
            <br />
            {imageUrl ? <img src={imageUrl} alt="imgurl" /> : null}
            <Button className="qrdown" href={imageUrl} download>
              Download
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
