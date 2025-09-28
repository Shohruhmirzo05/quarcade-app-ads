import React from "react";

const Privacy = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Effective date: 28 September 2025</p>

        <p className="mb-4">Fera Tech builds and publishes consumer apps and games. This policy explains how we handle personal information on our website fera-tech.com and across our apps, including QuarCade.</p>

        <p className="mb-4">If you have questions, contact us at <a className="text-brand-400" href="mailto:support@fera-tech.com">support@fera-tech.com</a>.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Quick summary</h2>
        <ul className="list-disc pl-6 mb-4 text-sm text-muted-foreground">
          <li>We collect the minimum necessary to run our apps, improve performance, and keep things secure.</li>
          <li>Our apps may show ads and use analytics; those partners may process device identifiers and usage data.</li>
          <li>We don’t sell personal data.</li>
          <li>You can control permissions (notifications, tracking, Game Center) in your device settings.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">What we collect</h2>
        <h3 className="font-semibold mt-4">1) Information you provide</h3>
        <ul className="list-disc pl-6 mb-4 text-sm text-muted-foreground">
          <li>Contact details you send us (e.g., email, name, message) via forms or support.</li>
          <li>Content you submit in feedback or surveys.</li>
        </ul>

        <h3 className="font-semibold mt-4">2) Information collected automatically</h3>
        <p className="text-sm text-muted-foreground mb-4">Device and app data: device model, OS version, app version, language, time zone, performance metrics, and crash logs.</p>
        <p className="text-sm text-muted-foreground mb-4">Usage data: screens viewed, features used, session timing, and basic interaction events.</p>

        <h3 className="font-semibold mt-4">3) Information from platform services (when enabled)</h3>
        <ul className="list-disc pl-6 mb-4 text-sm text-muted-foreground">
          <li>Game Center: display name, player ID, leaderboard and achievement activity. We don’t receive your real name or email from Game Center.</li>
          <li>Push notifications: a device token that allows us to send notifications to your device.</li>
          <li>Advertising identifiers: IDFA (iOS) when you grant permission, used for ad frequency capping, fraud prevention, and personalization depending on your choices.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">How we use information</h2>
        <ul className="list-disc pl-6 mb-4 text-sm text-muted-foreground">
          <li>Operate and improve our apps and website.</li>
          <li>Show ads and measure their performance.</li>
          <li>Provide features like leaderboards and achievements.</li>
          <li>Send optional notifications (e.g., daily challenges).</li>
          <li>Detect, prevent, and address abuse or technical issues.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Legal bases (EEA/UK)</h2>
        <p className="text-sm text-muted-foreground mb-4">Performance of a contract (app functionality), legitimate interests (analytics, security, non-personalized ads), and consent (ad personalization, notifications, tracking).</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Advertising and analytics</h2>
        <p className="text-sm text-muted-foreground mb-4">We use third-party providers for ads and analytics.</p>
        <p className="text-sm text-muted-foreground mb-4">AdMob (ads): may process IP address, device identifiers (including IDFA when permitted), app usage, and approximate location for ad delivery, frequency capping, and fraud prevention. EU/UK users may be shown a consent prompt; you can change choices in the app’s privacy options or your device settings.</p>
        <p className="text-sm text-muted-foreground mb-4">Policies: <a className="text-brand-400" href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a> and <a className="text-brand-400" href="https://support.google.com/admob/answer/6128543">https://support.google.com/admob/answer/6128543</a></p>

        <p className="text-sm text-muted-foreground mb-4">Analytics (e.g., Apple App Analytics or similar): we receive aggregated metrics such as installs, retention, crashes, and engagement. These help us understand performance and quality.</p>
        <p className="text-sm text-muted-foreground mb-4">We do not combine analytics with directly identifying information we hold (like support emails).</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Game Center</h2>
        <p className="text-sm text-muted-foreground mb-4">If you sign in to Apple Game Center, Apple provides us an alias and player ID so we can show leaderboards and achievements. Apple processes this data under its own privacy policy: <a className="text-brand-400" href="https://www.apple.com/legal/privacy/">https://www.apple.com/legal/privacy/</a></p>
        <p className="text-sm text-muted-foreground mb-4">You can manage Game Center in iOS Settings.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Cookies and similar technologies (website)</h2>
        <p className="text-sm text-muted-foreground mb-4">Our site may use cookies or local storage for basic functionality, preferences (e.g., theme), analytics, and to measure referral traffic. You can control cookies in your browser settings.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Data retention</h2>
        <p className="text-sm text-muted-foreground mb-4">App analytics and logs: retained only as long as needed for the purposes above, typically a rolling window (e.g., 12–24 months).</p>
        <p className="text-sm text-muted-foreground mb-4">Support emails: kept while your request is active and for a reasonable time afterward, unless you ask us to delete them.</p>
        <p className="text-sm text-muted-foreground mb-4">Ad data: retained by our ad partners per their policies.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Sharing</h2>
        <p className="text-sm text-muted-foreground mb-4">We share data only with:</p>
        <ul className="list-disc pl-6 mb-4 text-sm text-muted-foreground">
          <li>Service providers that help us run the website/apps (hosting, analytics, ad networks, crash reporting).</li>
          <li>Platform providers when you use their features (e.g., Game Center, App Store).</li>
          <li>Authorities when required by law or to protect our rights and users.</li>
        </ul>
        <p className="text-sm text-muted-foreground mb-4">We do not sell your personal information.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Children</h2>
        <p className="text-sm text-muted-foreground mb-4">Our apps are intended for a general audience. We don’t knowingly collect personal data from children under the age where parental consent is required by local law. If you believe a child provided us personal data, contact us and we’ll address it.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">International transfers</h2>
        <p className="text-sm text-muted-foreground mb-4">We may process and store information in countries outside your own. When required, we use appropriate safeguards (such as standard contractual clauses) to protect your data.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Your rights</h2>
        <p className="text-sm text-muted-foreground mb-4">Depending on your location, you may have rights to access, correct, delete, or restrict the use of your personal data, and to object to certain processing.</p>
        <p className="text-sm text-muted-foreground mb-4">iOS controls: manage tracking (IDFA), notifications, and Game Center in device Settings.</p>
        <p className="text-sm text-muted-foreground mb-4">Contact us: email <a className="text-brand-400" href="mailto:support@fera-tech.com">support@fera-tech.com</a> for data requests. We may need to verify your identity.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">California residents</h2>
        <p className="text-sm text-muted-foreground mb-4">For California residents, we do not sell or share personal information as defined by the CCPA/CPRA. You can still contact us for access or deletion requests.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Security</h2>
        <p className="text-sm text-muted-foreground mb-4">We use reasonable technical and organizational measures to protect your information. No system is perfectly secure, but we work to prevent unauthorized access and respond to issues promptly.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Changes to this policy</h2>
        <p className="text-sm text-muted-foreground mb-4">We may update this policy from time to time. We’ll change the “Effective date” above and, when appropriate, provide additional notice. Continued use of our apps or site means you accept the updated policy.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="text-sm text-muted-foreground mb-8">Fera Tech<br />Email: <a className="text-brand-400" href="mailto:support@fera-tech.com">support@fera-tech.com</a><br />Website: <a className="text-brand-400" href="https://fera-tech.com">https://fera-tech.com</a></p>

      </div>
    </div>
  );
};

export default Privacy;
