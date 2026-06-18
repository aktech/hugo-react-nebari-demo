import { type ReactNode, useState } from 'react';
import { ArrowRight, Check, Download, Trash2 } from 'lucide-react';
import { Badge } from '@/ui/badge';
import { Button } from '@/ui/button';
import { Spinner } from '@/ui/spinner';

const buttonVariants = ['default', 'secondary', 'outline', 'destructive', 'ghost', 'link'] as const;
const badgeVariants = ['default', 'secondary', 'destructive', 'outline', 'ghost'] as const;

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <h2 className="mb-4 font-semibold text-foreground text-lg">{title}</h2>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </section>
  );
}

export function App() {
  const [saving, setSaving] = useState(false);

  function save() {
    setSaving(true);
    setTimeout(() => setSaving(false), 1500);
  }

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-16">
      <header className="flex flex-col gap-3">
        <Badge variant="outline">React island in Hugo</Badge>
        <h1 className="font-semibold text-3xl text-foreground tracking-tight">
          Nebari design components
        </h1>
        <p className="text-muted-foreground">
          These are the actual React components from the Nebari design registry, bundled by
          Hugo&apos;s esbuild pipeline and mounted on a static page.
        </p>
      </header>

      <Section title="Buttons">
        {buttonVariants.map((v) => (
          <Button key={v} variant={v}>
            {v}
          </Button>
        ))}
      </Section>

      <Section title="Button sizes & icons">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button variant="secondary">
          <Download /> Download
        </Button>
        <Button variant="outline">
          Continue <ArrowRight />
        </Button>
        <Button variant="destructive" size="icon" aria-label="Delete">
          <Trash2 />
        </Button>
      </Section>

      <Section title="Loading state">
        <Button loading={saving} loadingText="Saving…" onClick={save}>
          <Check /> Save changes
        </Button>
        <Button variant="outline" loading={saving} onClick={save}>
          Submit
        </Button>
      </Section>

      <Section title="Badges">
        {badgeVariants.map((v) => (
          <Badge key={v} variant={v}>
            {v}
          </Badge>
        ))}
      </Section>

      <Section title="Spinners">
        <Spinner size="sm" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </Section>
    </main>
  );
}
