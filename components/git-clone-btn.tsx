import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";

export function GitCloneBtn() {
  const commandMap = {
    git: "git clone https://github.com/NathanColosimo/nathancolosimo.git",
  };

  return (
    <ScriptCopyBtn
      showMultiplePackageOptions={false}
      codeLanguage="bash"
      lightTheme="github-light"
      darkTheme="github-dark"
      commandMap={commandMap}
      className="w-full max-w-xl [&_svg]:w-5 [&_svg]:h-5"
    />
  );
} 