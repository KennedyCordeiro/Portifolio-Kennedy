import React from "react";
import Image from "next/image";
import { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="relative w-8 h-8">
          <Image
            src={skill.icon}
            alt={skill.name}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-medium text-gray-900">{skill.name}</h3>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${skill.level}%` }}></div>
      </div>
    </div>
  );
}
