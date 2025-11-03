export default function Footer() {
    return (
      <footer className="w-full border-accent/10 border-t">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-8">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nathan Colosimo. All rights reserved.
          </p>
        </div>
      </footer>
    );
}