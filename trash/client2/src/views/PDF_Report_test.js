import React from "react";
import { Page, Text, View, Document } from '@react-pdf/renderer';

const PDF_Report_test = (title, text) => {

  return (
    <Document>
      <Page>
        <View>
          <Text>
            {title}
          </Text>
          <Text>Organizacion de lenguajes y compiladores 2</Text>
          <Text>
            { text }
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDF_Report_test;