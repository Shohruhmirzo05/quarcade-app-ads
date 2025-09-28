import { Link } from "react-router-dom";
import { Github, Twitter, Mail } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Products", href: "/products" },
      { name: "Roadmap", href: "/roadmap" },
      { name: "Updates", href: "/updates" },
    ],
  },
  {
    title: "Company", 
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Press Kit", href: "/press-kit" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
];

const socialLinks = [
  { name: "GitHub", href: "#", icon: Github },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Email", href: "mailto:support@fera-tech.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <BrandLogo variant="lockup" />
            <p className="text-sm text-muted-foreground max-w-xs">
              A tiny product studio. We design, build, and ship apps and games.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-brand-400 transition-colors focus-brand rounded-md p-1"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-brand-400 transition-colors focus-brand rounded-md"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 Fera Tech. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made by Fera Tech
          </p>
        </div>
      </div>
    </footer>
  );
}