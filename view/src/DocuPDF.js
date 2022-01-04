import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";

const DocuPDF = ({ content }) => {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: "25px", marginTop: "20px" }}>
            Reporte: {content.title + '\n'}
          </Text><br></br>
          <Text 
            style={{
              color: "gray",
              fontStyle: "Times New Roman",
              fontSize: "10px",
              marginTop: "10px"
            }}
          >
            José Andres, Rodas Arrecis, 201504220
          </Text>
          <Text 
            style={{
              color: "gray",
              fontStyle: "Times New Roman",
              fontSize: "10px",
            }}
          >
            Facultad de Ingeniería, Escuela de Ciencias y Sistemas, Universidad de San Carlos
          </Text>
          <Text 
            style={{
              color: "gray",
              fontStyle: "Times New Roman",
              fontSize: "10px"
            }}
          >
            Edificio T3, Ciudad Universitaria, Zona 12, Guatemala {'\n'}
          </Text>
          <Text style={{ textAlign: "justify", color: "black", fontStyle: "Times New Roman", fontSize: "15px", marginTop: "15px", marginLeft:"30px", marginRight:"30px"}}>
            {content.resumen}
          </Text>
          <View>
            <Text style={{ color: "black", fontSize: "15px", position: "absolute", top: "0px", marginLeft:"20px", width: "250px", marginTop: "15px" }}>
              {content.text1}
            </Text>
            
            <Text style={{ color: "#000000", fontSize: "15px", marginLeft:"300px", marginRight: "20px", marginTop:"15px" }}>
              {content.text2}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default DocuPDF;
