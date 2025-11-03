"use client";

import { useState } from "react";
import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";

const commands = [
  {
    label: "git",
    code: "git clone https://github.com/NathanColosimo/nathancolosimo.git && cd nathancolosimo",
  },
  {
    label: "gh cli",
    code: "gh repo clone NathanColosimo/nathancolosimo && cd nathancolosimo",
  },
];

function CloneButton() {
  const [value, setValue] = useState(commands[0].label);
  const activeCommand = commands.find((command) => command.label === value);

  return (
    <Snippet onValueChange={setValue} value={value}>
      <SnippetHeader>
        <SnippetTabsList>
          {commands.map((command) => (
            <SnippetTabsTrigger key={command.label} value={command.label}>
              <span>{command.label}</span>
            </SnippetTabsTrigger>
          ))}
        </SnippetTabsList>
        {activeCommand && <SnippetCopyButton value={activeCommand.code} />}
      </SnippetHeader>
      {commands.map((command) => (
        <SnippetTabsContent key={command.label} value={command.label}>
          {command.code}
        </SnippetTabsContent>
      ))}
    </Snippet>
  );
}

export default CloneButton;
