"use client";
import Skills from "@/components/Skills";
import React, { useMemo } from "react";

const MemoizedSkills = React.memo(Skills);

const page = () => {
  const SkillsComponent = useMemo(() => <MemoizedSkills />, []);
  return <div className="relative z-10">{SkillsComponent}</div>;
};

export default page;
