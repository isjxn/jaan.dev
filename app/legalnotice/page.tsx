import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'jaan.dev | Legal Notice',
  description: 'Legal Notice of jaan.dev',
}

export default function Impressum() {
  return (
    <main className="w-screen bg-background text-text">
      <p className="p-6">
        <strong>Please ensure that all addresses and data are treated confidentially and are not passed on to third parties.</strong><br /><br />

        <span className="text-2xl font-bold">Legal Notice</span><br />
        jaan.dev<br />
        Jan Niklas Diederich<br />
        Elbdeich 150<br />
        21217 Seevetal<br /><br />

        <span className="text-2xl font-bold">Contact</span><br />
        Mail: admin@nanologic.dev<br /><br />

        Phone: (+49) 01590-1633862<br /><br />

        <span className="text-2xl font-bold">Notice according to the Online Dispute Resolution Regulation</span><br />
        Under applicable law, we are obliged to inform consumers of the existence of the European Online Dispute Resolution Platform, which can be used to settle disputes without having to go to court.<br />
        The European Commission is responsible for setting up the platform.<br />
        The European Online Dispute Resolution Platform can be found here: http://ec.europa.eu/odr <br />
        Our email is: admin@nanologic.dev<br /><br />

        However, we would like to point out that we are not prepared to participate in the dispute resolution procedure within the framework of the European Online Dispute Resolution Platform.<br />
        Please use our email and telephone number above to contact us.<br /><br />

        <span className="text-2xl font-bold">Notice in accordance with the Consumer Dispute Resolution Act (VSBG)</span><br />
        We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
      </p>
    </main>
  );
}