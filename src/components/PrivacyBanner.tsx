import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function PrivacyBanner() {
  const [accepted, setAccepted] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem("fera_privacy_accepted");
    if (!stored) {
      // show banner after a short delay so it doesn't clash with initial rendering
      const t = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(t);
    }
    setAccepted(true);
  }, []);

  const accept = () => {
    localStorage.setItem("fera_privacy_accepted", "1");
    setAccepted(true);
    setVisible(false);
  };

  if (accepted || !visible) return null;

  return (
    <div className="fixed left-4 right-4 bottom-6 z-50 md:left-8 md:right-8">
      <div className="bg-card/90 backdrop-blur-md border border-border rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1 text-sm text-muted-foreground">
          We updated our Privacy Policy. By continuing to use the site you accept the new policy. <a href="/privacy" className="text-brand-400 underline">Read the policy</a>.
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href="/privacy-print.html?print=0" target="_blank" rel="noreferrer">Download (print)</a>
          </Button>
          <Button variant="default" size="sm" onClick={accept}>Accept</Button>
        </div>
      </div>
    </div>
  );
}
