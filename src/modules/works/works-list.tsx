import Works from "./works";

type WorksListProps = {
  dictionary: Dictionary["works"];
};

export default function WorksList({ dictionary }: WorksListProps) {
  return (
    <section className="flex min-h-0 flex-col gap-y-3">
      <h1 className="text-lg font-bold">{dictionary.title}</h1>

      <Works dictionary={dictionary} />
    </section>
  );
}

