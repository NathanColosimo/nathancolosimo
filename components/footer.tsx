export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl border-accent/10 border-t px-5 py-8">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Nathan Colosimo. All rights reserved.
      </p>
    </footer>
  );
}
