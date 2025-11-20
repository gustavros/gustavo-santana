type AboutProps = {
  dictionary: Dictionary["about"];
};

export default function About({ dictionary }: AboutProps) {
  return (
    <section className="flex min-h-0 flex-col gap-y-3">
      <h1 className="text-xl font-bold">{dictionary.title}</h1>
      <p
        dangerouslySetInnerHTML={{ __html: dictionary.description }}
        className="text-pretty font-mono text-sm text-muted-foreground"
      />
    </section>
  );
}

