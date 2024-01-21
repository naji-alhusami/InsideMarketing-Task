import gold from "../../assets/gold.png";
import norwegian from "../../assets/norwegian.png";
import masterGold from "../../assets/master-gold.png";
import extra from "../../assets/extra.png";
import barclays from "../../assets/barclays.png";

export const ImportantCardsData = [
  {
    id: "1",
    bank: "Gebührenfrei Mastercard Gold",
    bankImg: gold,
    advantage1: "Gold-Karte mit Versicherungspaket",
    advantage2: "Flexible Rückzahlung",
    advantage3: "Einfache Beantragung",
    WithdrawalFees: "0,00 %",
    interest: "24,69 %",
    rate: "1.1",
    rateInWord: "Exzellent",
    info: "Die Bank erhebt keine pauschale Gebühr auf Bargeldabhebungen. Stattdessen fallen auf ausgezahlte Beträge ab dem ersten Tag Sollzinsen an. Eventuelle Gebühren der Automatenbetreiber werden nicht erstattet.",
  },

  {
    id: "2",
    bank: "Bank Norwegian Kreditkarte",
    bankImg: norwegian,
    advantage1: "10 € Startguthaben",
    advantage2: "Weltweit kostenlos bezahlen & abheben",
    advantage3: "Kreditlimit bis 10.000 €",
    WithdrawalFees: "0,00 %",
    interest: "24,40 %",
    rate: "1.1",
    rateInWord: "Exzellent",
    info: "Abhebungen sind seitens Bank Norwegian an allen VISA Geldautomaten weltweit kostenlos. Eventuelle Gebühren der Automatenbetreiber werden nicht erstattet.",
  },

  {
    id: "3",
    bank: "TF Mastercard Gold",
    bankImg: masterGold,
    advantage1: "Individuelles Kreditkartenlimit",
    advantage2: "Paket aus 4 Reiseversicherungen",
    advantage3: "Flexible Ratenzahlungen möglich",
    WithdrawalFees: "0,00 %",
    interest: "24,79 %",
    rate: "1.2",
    rateInWord: "Sehr gut",
    info: "Die TF Bank erhebt keine pauschale Gebühr auf Bargeldabhebungen. Stattdessen fallen auf ausgezahlte Beträge ab dem ersten Tag Sollzinsen an. Eventuelle Gebühren der Automatenbetreiber werden nicht erstattet.",
  },

  {
    id: "4",
    bank: "Extra Karte Mastercard",
    bankImg: extra,
    advantage1: "Ohne Jahresgebühr",
    advantage2: "Flexible Rückzahlung",
    advantage3: "Hohe Annahmequote",
    WithdrawalFees: "3,00 %",
    interest: "24,60 %",
    rate: "1.7",
    rateInWord: "Gut",
    info: "Barabhebung in Euro kosten 3,00 % des abgehobenen Betrags, mind. 3,00 €. Zusätzlich fallen ab dem ersten Tag Zinsen an. Eventuelle Gebühren der Automatenbetreiber werden nicht erstattet.",
  },

  {
    id: "5",
    bank: "Barclays Visa",
    bankImg: barclays,
    advantage1: "Weltweit kostenlos bezahlen & abheben",
    advantage2: "Rechnungsausgleich per Lastschrift",
    advantage3: "Niedrigere Annahmequote",
    WithdrawalFees: "0,00 %",
    interest: "23,13 %",
    rate: "1.7",
    rateInWord: "Gut",
    info: "Abhebungen mit der Barclays Visa sind seitens Barclays an allen VISA Geldautomaten weltweit kostenlos. Eventuelle Gebühren der Automatenbetreiber werden nicht erstattet.",
  },
];
