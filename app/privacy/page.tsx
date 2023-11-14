import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'jaan.dev | Privacy',
  description: 'Privacy Policy of jaan.dev',
}

export default function Privacy() {
  return (
    <main className="w-screen h-full bg-background text-text">
      <p className="p-6">
        <strong>Please ensure that all addresses and data are treated confidentially and are not passed on to third parties.</strong><br /><br />
        <span className="text-2xl font-bold">Data protection</span><br />
        <span className="text-xl font-bold">Responsible person</span><br />
        jaan.dev<br />
        Jan Niklas Diederich<br />
        Elbdeich 150<br />
        21217 Seevetal <br />
        Mail: admin@nanologic.dev<br /><br />

        Phone: (+49) 01590-1633862<br /><br />

        <span className="text-2xl font-bold">General information</span><br />
        Your personal data (e.g. title, name, address, e-mail address, telephone number) will only be processed by us in accordance with the provisions of German data protection law and the data protection law of the European Union (EU).<br />
        In addition to the information on processing, the following provisions also inform you about the rights to which you are entitled.<br /><br />

        <span className="text-2xl font-bold">Data processing for contractual purposes</span><br />
        Personal data that you make available to us for the processing of contracts, the initiation of a contract or for technical support will only be used for these purposes.<br /><br />

        <span className="text-2xl font-bold">Data transfer to third parties</span><br />
        We transfer your data to service providers who support us in the operation of our websites and the associated processes as part of order processing in accordance with Art. 28 GDPR. Our service providers are strictly bound by our instructions and contractually obligated accordingly.
        We use the following service providers: NetCup<br /><br />

        <span className="text-2xl font-bold">Use of cookies</span><br />
        We use so-called cookies on our website to make it easier for you to use our website.<br />
        These are small text files that your Internet browser places and stores on your computer.<br /><br />

        <span className="text-2xl font-bold">Integration of third-party services and content</span><br />
        Based on our legitimate interests, we use content or services from third-party providers within our online offering in order to integrate their content and services, such as videos (YouTube), fonts (Google Fonts), live streams (Twitch) or tweets (Twitter).<br /><br />

        <span className="text-2xl font-bold">Your rights</span><br />
        You have the right to information, rectification, erasure, restriction of processing and to object to processing as well as to data portability.<br />
        You also have the right to lodge a complaint with a data protection supervisory authority.<br /><br />

        <span className="text-2xl font-bold">Changes to the privacy policy</span><br />
        We reserve the right to amend the privacy policy in order to adapt it to changed legal situations or in the event of changes to the service and data processing. Users are therefore requested to inform themselves regularly about its content.<br /><br />

        <strong>Status: 14.11.2023</strong>
      </p>
    </main>
  )
}