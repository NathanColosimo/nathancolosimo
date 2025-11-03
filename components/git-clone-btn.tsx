import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";

export function GitCloneBtn() {
  const commandMap = {
    git: "git clone https://github.com/NathanColosimo/nathancolosimo.git && cd nathancolosimo",
  };

  return (
    <ScriptCopyBtn
      className="max-w-[280px] [&_button]:transition-colors hover:[&_button]:border-border hover:[&_button]:bg-black/5"
      codeLanguage="shell"
      commandMap={commandMap}
      darkTheme="vitesse-dark"
      lightTheme="vitesse-light"
      showMultiplePackageOptions={false}
    />
  );
}
