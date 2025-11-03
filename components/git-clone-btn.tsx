import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";

export function GitCloneBtn() {
  const commandMap = {
    git: "git clone https://github.com/NathanColosimo/nathancolosimo.git && cd nathancolosimo",
  };

  return (
    <ScriptCopyBtn
      showMultiplePackageOptions={false}
      codeLanguage="shell"
      lightTheme="vitesse-light"
      darkTheme="vitesse-dark"
      commandMap={commandMap}
      className="max-w-[280px] hover:[&_button]:bg-black/5 hover:[&_button]:border-border [&_button]:transition-colors"
    />
  );
} 