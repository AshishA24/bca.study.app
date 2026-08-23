import { Braces, Database, GitBranch, LineChart, Shield } from "lucide-react";

const icons = {
  se: GitBranch,
  java: Braces,
  rdms: Database,
  cyber: Shield,
  dm: LineChart,
} as const;

export function SubjectIcon({ id, className }: { id: string; className?: string }) {
  const Icon = icons[id as keyof typeof icons] ?? GitBranch;
  return <Icon className={className} strokeWidth={1.5} />;
}
