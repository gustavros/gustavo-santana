"use client";

import { motion } from "framer-motion";

type AboutProps = {
  dictionary: Dictionary["about"];
};

export default function About({ dictionary }: AboutProps) {
  return (
    <motion.section
      className="flex min-h-0 flex-col gap-y-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-lg font-bold">{dictionary.title}</h1>
      <p
        dangerouslySetInnerHTML={{ __html: dictionary.description }}
        className="text-pretty font-mono text-sm text-muted-foreground"
      />
    </motion.section>
  );
}

