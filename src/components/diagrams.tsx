import type { ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";

type DiagramProps = { className?: string };

const ink = "#C5D4DC";
const mute = "#8A877F";
const fill = "rgba(255,255,255,0.04)";
const fillStrong = "rgba(197,212,220,0.12)";

function Frame({
  children,
  className,
  viewBox = "0 0 560 280",
}: {
  children: ReactNode;
  className?: string;
  viewBox?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      className={cn("h-auto w-full", className)}
      role="img"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function Box({
  x,
  y,
  w,
  h,
  label,
  accent,
  size = 12,
}: {
  x: number | string;
  y: number | string;
  w: number | string;
  h: number | string;
  label: string;
  accent?: boolean;
  size?: number;
}) {
  const nx = Number(x);
  const ny = Number(y);
  const nw = Number(w);
  const nh = Number(h);
  return (
    <g>
      <rect
        x={nx}
        y={ny}
        width={nw}
        height={nh}
        rx={10}
        fill={accent ? fillStrong : fill}
        stroke={accent ? ink : mute}
        strokeWidth={1.2}
      />
      <text
        x={nx + nw / 2}
        y={ny + nh / 2 + 4}
        textAnchor="middle"
        fill={ink}
        fontSize={size}
        fontFamily="Figtree, sans-serif"
      >
        {label}
      </text>
    </g>
  );
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number | string;
  y1: number | string;
  x2: number | string;
  y2: number | string;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={mute}
      strokeWidth={1.2}
      markerEnd="url(#arrow)"
    />
  );
}

function Defs() {
  return (
    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8" fill="none" stroke={mute} strokeWidth="1.2" />
      </marker>
    </defs>
  );
}

function Waterfall(_p: DiagramProps) {
  const phases = ["Req.", "Design", "Code", "Test", "Maintain"];
  return (
    <Frame viewBox="0 0 560 220">
      <Defs />
      {phases.map((p, i) => (
        <g key={p}>
          <Box x={24 + i * 108} y={36 + i * 22} w={96} h={40} label={p} accent={i === 0} />
          {i < phases.length - 1 ? (
            <Arrow
              x1={24 + i * 108 + 96}
              y1={56 + i * 22}
              x2={24 + (i + 1) * 108}
              y2={56 + (i + 1) * 22}
            />
          ) : null}
        </g>
      ))}
    </Frame>
  );
}

function VModel(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 240">
      <Defs />
      <Box x="20" y="28" w="110" h="36" label="Requirements" />
      <Box x="90" y="84" w="110" h="36" label="High-level design" />
      <Box x="160" y="140" w="90" h="36" label="Low-level" />
      <Box x="250" y="188" w="70" h="36" label="Code" accent />
      <Box x="330" y="140" w="90" h="36" label="Unit test" />
      <Box x="370" y="84" w="110" h="36" label="Integration" />
      <Box x="430" y="28" w="110" h="36" label="Acceptance" />
      <Arrow x1="130" y1="64" x2="145" y2="84" />
      <Arrow x1="200" y1="120" x2="205" y2="140" />
      <Arrow x1="250" y1="176" x2="260" y2="188" />
      <Arrow x1="320" y1="206" x2="330" y2="176" />
      <Arrow x1="420" y1="140" x2="430" y2="120" />
      <Arrow x1="480" y1="84" x2="490" y2="64" />
      <line x1="130" y1="46" x2="430" y2="46" stroke={mute} strokeDasharray="4 4" strokeWidth="1" />
    </Frame>
  );
}

function Spiral(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 260">
      <line x1="280" y1="20" x2="280" y2="240" stroke={mute} strokeWidth="1" />
      <line x1="40" y1="130" x2="520" y2="130" stroke={mute} strokeWidth="1" />
      <text x="150" y="42" fill={mute} fontSize="11" fontFamily="Figtree, sans-serif">
        Determine objectives
      </text>
      <text x="330" y="42" fill={mute} fontSize="11" fontFamily="Figtree, sans-serif">
        Identify & resolve risks
      </text>
      <text x="150" y="230" fill={mute} fontSize="11" fontFamily="Figtree, sans-serif">
        Plan next iteration
      </text>
      <text x="330" y="230" fill={mute} fontSize="11" fontFamily="Figtree, sans-serif">
        Develop & test
      </text>
      <path
        d="M280,130
           m0,0 q18,-18 18,0 t18,0
           q36,-40 36,0 t36,0
           q60,-70 60,0 t48,8"
        fill="none"
        stroke={ink}
        strokeWidth="1.8"
      />
    </Frame>
  );
}

function Agile(_p: DiagramProps) {
  const steps = ["Plan", "Design", "Build", "Test", "Review"];
  return (
    <Frame viewBox="0 0 560 220">
      <Defs />
      {steps.map((s, i) => (
        <g key={s}>
          <Box x={30 + i * 105} y={70} w="90" h="44" label={s} accent={i === 2} />
          {i < steps.length - 1 ? (
            <Arrow x1={120 + i * 105} y1={92} x2={135 + i * 105} y2={92} />
          ) : null}
        </g>
      ))}
      <path
        d="M505,114 C505,170 280,190 55,114"
        fill="none"
        stroke={ink}
        strokeWidth="1.3"
        markerEnd="url(#arrow)"
      />
      <text x="280" y="200" textAnchor="middle" fill={mute} fontSize="12" fontFamily="Figtree, sans-serif">
        Next sprint
      </text>
    </Frame>
  );
}

function Incremental(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 220">
      <Box x="30" y="40" w="120" h="40" label="Core increment" accent />
      <Box x="200" y="40" w="120" h="40" label="Increment 2" />
      <Box x="370" y="40" w="120" h="40" label="Increment 3" />
      <Box x="30" y="130" w="460" h="48" label="Working product grows each increment" />
      <Defs />
      <Arrow x1="150" y1="60" x2="200" y2="60" />
      <Arrow x1="320" y1="60" x2="370" y2="60" />
    </Frame>
  );
}

function Sdlc(_p: DiagramProps) {
  const items = ["Plan", "Analyze", "Design", "Implement", "Test", "Maintain"];
  return (
    <Frame viewBox="0 0 560 240">
      {items.map((label, i) => {
        const a = ((-90 + i * 60) * Math.PI) / 180;
        const cx = 280 + Math.cos(a) * 92;
        const cy = 120 + Math.sin(a) * 78;
        return <Box key={label} x={cx - 48} y={cy - 18} w={96} h={36} label={label} accent={i === 0} size={11} />;
      })}
      <circle cx="280" cy="120" r="28" fill={fillStrong} stroke={ink} strokeWidth="1.2" />
      <text x="280" y="124" textAnchor="middle" fill={ink} fontSize="12" fontFamily="Figtree, sans-serif">
        SDLC
      </text>
    </Frame>
  );
}

function Dfd(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 240">
      <ellipse cx="80" cy="120" rx="54" ry="28" fill={fill} stroke={ink} strokeWidth="1.2" />
      <text x="80" y="124" textAnchor="middle" fill={ink} fontSize="12" fontFamily="Figtree, sans-serif">
        Student
      </text>
      <rect x="210" y="96" width="120" height="48" fill={fillStrong} stroke={ink} strokeWidth="1.2" />
      <text x="270" y="124" textAnchor="middle" fill={ink} fontSize="12" fontFamily="Figtree, sans-serif">
        Enrol process
      </text>
      <rect x="400" y="40" width="28" height="160" fill="none" stroke={mute} strokeWidth="1.2" />
      <line x1="400" y1="40" x2="428" y2="40" stroke={mute} strokeWidth="1.2" />
      <line x1="400" y1="200" x2="428" y2="200" stroke={mute} strokeWidth="1.2" />
      <text x="454" y="124" fill={ink} fontSize="12" fontFamily="Figtree, sans-serif">
        Course file
      </text>
      <Defs />
      <Arrow x1="134" y1="120" x2="210" y2="120" />
      <Arrow x1="330" y1="110" x2="400" y2="90" />
    </Frame>
  );
}

function Cohesion(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 220">
      <text x="140" y="36" textAnchor="middle" fill={mute} fontSize="12" fontFamily="Figtree, sans-serif">
        High cohesion
      </text>
      <text x="420" y="36" textAnchor="middle" fill={mute} fontSize="12" fontFamily="Figtree, sans-serif">
        Low coupling
      </text>
      <Box x="70" y="60" w="140" h="120" label="" accent />
      <text x="140" y="108" textAnchor="middle" fill={ink} fontSize="12" fontFamily="Figtree, sans-serif">
        Related
      </text>
      <text x="140" y="126" textAnchor="middle" fill={ink} fontSize="12" fontFamily="Figtree, sans-serif">
        functions
      </text>
      <Box x="350" y="60" w="70" h="50" label="A" />
      <Box x="440" y="60" w="70" h="50" label="B" />
      <Box x="395" y="130" w="70" h="50" label="C" />
      <line x1="420" y1="110" x2="430" y2="130" stroke={mute} strokeWidth="1" />
      <line x1="385" y1="85" x2="440" y2="85" stroke={mute} strokeWidth="1" />
    </Frame>
  );
}

function UmlViews(_p: DiagramProps) {
  const views = ["Use-case", "Logical", "Process", "Development", "Physical"];
  return (
    <Frame viewBox="0 0 560 220">
      <Box x="200" y="88" w="160" h="44" label="4+1 views" accent />
      {views.map((v, i) => {
        const x = 20 + i * 108;
        return <Box key={v} x={x} y={i % 2 === 0 ? 28 : 160} w="100" h="36" label={v} size={11} />;
      })}
    </Frame>
  );
}

function ClassDiagram(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 240">
      <rect x="40" y="30" width="160" height="120" rx="10" fill={fill} stroke={ink} strokeWidth="1.2" />
      <text x="120" y="56" textAnchor="middle" fill={ink} fontSize="13" fontFamily="Figtree, sans-serif">
        Student
      </text>
      <line x1="40" y1="68" x2="200" y2="68" stroke={mute} />
      <text x="52" y="92" fill={mute} fontSize="11" fontFamily="IBM Plex Mono, monospace">
        - roll: String
      </text>
      <line x1="40" y1="108" x2="200" y2="108" stroke={mute} />
      <text x="52" y="132" fill={mute} fontSize="11" fontFamily="IBM Plex Mono, monospace">
        + enrol()
      </text>
      <rect x="360" y="30" width="160" height="120" rx="10" fill={fill} stroke={ink} strokeWidth="1.2" />
      <text x="440" y="56" textAnchor="middle" fill={ink} fontSize="13" fontFamily="Figtree, sans-serif">
        Course
      </text>
      <line x1="360" y1="68" x2="520" y2="68" stroke={mute} />
      <text x="372" y="92" fill={mute} fontSize="11" fontFamily="IBM Plex Mono, monospace">
        - code: String
      </text>
      <line x1="360" y1="108" x2="520" y2="108" stroke={mute} />
      <text x="372" y="132" fill={mute} fontSize="11" fontFamily="IBM Plex Mono, monospace">
        + addStudent()
      </text>
      <line x1="200" y1="90" x2="360" y2="90" stroke={ink} strokeWidth="1.2" />
      <text x="280" y="82" textAnchor="middle" fill={mute} fontSize="11" fontFamily="Figtree, sans-serif">
        * enrols *
      </text>
    </Frame>
  );
}

function Cocomo(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 220">
      <Box x="30" y="80" w="100" h="48" label="Organic" />
      <Box x="160" y="80" w="130" h="48" label="Semidetached" />
      <Box x="320" y="80" w="110" h="48" label="Embedded" accent />
      <text x="280" y="40" textAnchor="middle" fill={mute} fontSize="13" fontFamily="Figtree, sans-serif">
        Effort = a × (KLOC)^b
      </text>
      <text x="280" y="180" textAnchor="middle" fill={mute} fontSize="12" fontFamily="Figtree, sans-serif">
        Basic · Intermediate · Detailed
      </text>
    </Frame>
  );
}

function TestLevels(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 240">
      <Box x="190" y="20" w="180" h="40" label="Acceptance" />
      <Box x="205" y="72" w="150" h="40" label="System" />
      <Box x="220" y="124" w="120" h="40" label="Integration" />
      <Box x="235" y="176" w="90" h="40" label="Unit" accent />
    </Frame>
  );
}

function Jvm(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 240">
      <Defs />
      <Box x="20" y="90" w="90" h="44" label=".java" />
      <Box x="150" y="90" w="90" h="44" label="javac" />
      <Box x="280" y="90" w="90" h="44" label=".class" accent />
      <Box x="410" y="90" w="120" h="44" label="JVM / JIT" />
      <Arrow x1="110" y1="112" x2="150" y2="112" />
      <Arrow x1="240" y1="112" x2="280" y2="112" />
      <Arrow x1="370" y1="112" x2="410" y2="112" />
      <text x="280" y="180" textAnchor="middle" fill={mute} fontSize="12" fontFamily="Figtree, sans-serif">
        Bytecode is platform-neutral
      </text>
    </Frame>
  );
}

function ThreadLifecycle(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 240">
      <Defs />
      <Box x="20" y="96" w="80" h="40" label="New" />
      <Box x="140" y="96" w="100" h="40" label="Runnable" accent />
      <Box x="290" y="30" w="100" h="40" label="Blocked" />
      <Box x="290" y="160" w="110" h="40" label="Waiting" />
      <Box x="440" y="96" w="100" h="40" label="Terminated" />
      <Arrow x1="100" y1="116" x2="140" y2="116" />
      <Arrow x1="240" y1="96" x2="290" y2="60" />
      <Arrow x1="240" y1="136" x2="290" y2="170" />
      <Arrow x1="240" y1="116" x2="440" y2="116" />
    </Frame>
  );
}

function ExceptionHierarchy(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 240">
      <Box x="200" y="16" w="160" h="36" label="Throwable" accent />
      <Box x="70" y="90" w="140" h="36" label="Error" />
      <Box x="350" y="90" w="160" h="36" label="Exception" />
      <Box x="250" y="170" w="150" h="36" label="RuntimeException" />
      <Box x="430" y="170" w="110" h="36" label="IOException" size={11} />
      <line x1="280" y1="52" x2="140" y2="90" stroke={mute} />
      <line x1="280" y1="52" x2="430" y2="90" stroke={mute} />
      <line x1="430" y1="126" x2="325" y2="170" stroke={mute} />
      <line x1="430" y1="126" x2="485" y2="170" stroke={mute} />
    </Frame>
  );
}

function Inheritance(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 240">
      <Box x="200" y="24" w="160" h="40" label="Vehicle" accent />
      <Box x="60" y="150" w="140" h="40" label="Car" />
      <Box x="360" y="150" w="140" h="40" label="Bike" />
      <line x1="280" y1="64" x2="130" y2="150" stroke={ink} />
      <line x1="280" y1="64" x2="430" y2="150" stroke={ink} />
    </Frame>
  );
}

function Dbms3tier(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 240">
      <Box x="180" y="20" w="200" h="44" label="External / view" />
      <Box x="180" y="98" w="200" h="44" label="Conceptual / logical" accent />
      <Box x="180" y="176" w="200" h="44" label="Internal / physical" />
      <text x="400" y="48" fill={mute} fontSize="11" fontFamily="Figtree, sans-serif">
        users
      </text>
      <text x="400" y="204" fill={mute} fontSize="11" fontFamily="Figtree, sans-serif">
        storage
      </text>
    </Frame>
  );
}

function Er(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 240">
      <rect x="40" y="90" width="120" height="52" rx="8" fill={fill} stroke={ink} strokeWidth="1.2" />
      <text x="100" y="120" textAnchor="middle" fill={ink} fontSize="13" fontFamily="Figtree, sans-serif">
        STUDENT
      </text>
      <polygon points="280,80 340,116 280,152 220,116" fill={fillStrong} stroke={ink} strokeWidth="1.2" />
      <text x="280" y="120" textAnchor="middle" fill={ink} fontSize="12" fontFamily="Figtree, sans-serif">
        enrols
      </text>
      <rect x="400" y="90" width="120" height="52" rx="8" fill={fill} stroke={ink} strokeWidth="1.2" />
      <text x="460" y="120" textAnchor="middle" fill={ink} fontSize="13" fontFamily="Figtree, sans-serif">
        COURSE
      </text>
      <line x1="160" y1="116" x2="220" y2="116" stroke={mute} />
      <line x1="340" y1="116" x2="400" y2="116" stroke={mute} />
      <text x="180" y="108" fill={mute} fontSize="11">
        M
      </text>
      <text x="370" y="108" fill={mute} fontSize="11">
        N
      </text>
    </Frame>
  );
}

function Keys(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 220">
      <Box x="30" y="80" w="90" h="44" label="Super" />
      <Box x="140" y="80" w="110" h="44" label="Candidate" />
      <Box x="270" y="80" w="100" h="44" label="Primary" accent />
      <Box x="390" y="80" w="140" h="44" label="Foreign" />
    </Frame>
  );
}

function Nf(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 240">
      <Box x="40" y="90" w="70" h="44" label="1NF" />
      <Box x="130" y="90" w="70" h="44" label="2NF" />
      <Box x="220" y="90" w="70" h="44" label="3NF" />
      <Box x="310" y="90" w="80" h="44" label="BCNF" accent />
      <Box x="410" y="90" w="60" h="44" label="4NF" />
      <Box x="490" y="90" w="50" h="44" label="5NF" size={11} />
    </Frame>
  );
}

function RaJoin(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 240">
      <circle cx="220" cy="120" r="70" fill={fill} stroke={ink} strokeWidth="1.2" />
      <circle cx="340" cy="120" r="70" fill={fillStrong} stroke={ink} strokeWidth="1.2" />
      <text x="180" y="124" fill={ink} fontSize="12" fontFamily="Figtree, sans-serif">
        R
      </text>
      <text x="372" y="124" fill={ink} fontSize="12" fontFamily="Figtree, sans-serif">
        S
      </text>
      <text x="280" y="124" textAnchor="middle" fill={ink} fontSize="11" fontFamily="Figtree, sans-serif">
        ⋈
      </text>
    </Frame>
  );
}

function Acid(_p: DiagramProps) {
  const items = ["Atomicity", "Consistency", "Isolation", "Durability"];
  return (
    <Frame viewBox="0 0 560 200">
      {items.map((l, i) => (
        <Box key={l} x={20 + i * 135} y={76} w="120" h="48" label={l} accent={i === 0} size={12} />
      ))}
    </Frame>
  );
}

function Cyberspace(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 240">
      <Box x="180" y="20" w="200" h="40" label="Users & devices" />
      <Box x="180" y="80" w="200" h="40" label="Applications" />
      <Box x="180" y="140" w="200" h="40" label="Networks" accent />
      <Box x="180" y="200" w="200" h="28" label="Physical infrastructure" size={11} />
    </Frame>
  );
}

function IdsIps(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 220">
      <Defs />
      <Box x="20" y="88" w="90" h="44" label="Traffic" />
      <Box x="150" y="88" w="90" h="44" label="IDS" />
      <Box x="280" y="88" w="90" h="44" label="IPS" accent />
      <Box x="410" y="88" w="120" h="44" label="Protected net" />
      <Arrow x1="110" y1="110" x2="150" y2="110" />
      <Arrow x1="240" y1="110" x2="280" y2="110" />
      <Arrow x1="370" y1="110" x2="410" y2="110" />
      <text x="195" y="170" fill={mute} fontSize="11" fontFamily="Figtree, sans-serif">
        detect
      </text>
      <text x="310" y="170" fill={mute} fontSize="11" fontFamily="Figtree, sans-serif">
        block
      </text>
    </Frame>
  );
}

function AuthFactors(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 200">
      <Box x="20" y="76" w="160" h="48" label="Know — password" />
      <Box x="200" y="76" w="160" h="48" label="Have — OTP / key" accent />
      <Box x="380" y="76" w="160" h="48" label="Are — biometric" />
    </Frame>
  );
}

function Poem(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 200">
      <Box x="20" y="70" w="160" h="56" label="Paid media" />
      <Box x="200" y="70" w="160" h="56" label="Owned media" accent />
      <Box x="380" y="70" w="160" h="56" label="Earned media" />
    </Frame>
  );
}

function Cdj(_p: DiagramProps) {
  const steps = ["Consider", "Evaluate", "Buy", "Enjoy", "Advocate"];
  return (
    <Frame viewBox="0 0 560 200">
      <Defs />
      {steps.map((s, i) => (
        <g key={s}>
          <Box x={16 + i * 110} y={76} w="100" h="44" label={s} accent={i === 2} size={11} />
          {i < steps.length - 1 ? (
            <Arrow x1={116 + i * 110} y1={98} x2={126 + i * 110} y2={98} />
          ) : null}
        </g>
      ))}
    </Frame>
  );
}

function Seo(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 200">
      <Box x="20" y="70" w="160" h="56" label="On-page" />
      <Box x="200" y="70" w="160" h="56" label="Technical" accent />
      <Box x="380" y="70" w="160" h="56" label="Off-page" />
    </Frame>
  );
}

function DisplayAds(_p: DiagramProps) {
  return (
    <Frame viewBox="0 0 560 220">
      <rect x="40" y="30" width="480" height="160" rx="12" fill={fill} stroke={mute} strokeWidth="1.2" />
      <rect x="58" y="48" width="200" height="24" rx="6" fill={fillStrong} stroke={ink} />
      <text x="70" y="64" fill={ink} fontSize="11" fontFamily="Figtree, sans-serif">
        Leaderboard
      </text>
      <rect x="390" y="48" width="110" height="124" rx="8" fill={fillStrong} stroke={ink} />
      <text x="445" y="112" textAnchor="middle" fill={ink} fontSize="11" fontFamily="Figtree, sans-serif">
        Skyscraper
      </text>
      <rect x="58" y="90" width="120" height="80" rx="8" fill={fillStrong} stroke={ink} />
      <text x="118" y="134" textAnchor="middle" fill={ink} fontSize="11" fontFamily="Figtree, sans-serif">
        MPU
      </text>
    </Frame>
  );
}

const registry: Record<string, (p: DiagramProps) => ReactElement> = {
  waterfall: Waterfall,
  vmodel: VModel,
  spiral: Spiral,
  agile: Agile,
  incremental: Incremental,
  sdlc: Sdlc,
  dfd: Dfd,
  cohesion: Cohesion,
  "uml-views": UmlViews,
  "class-diagram": ClassDiagram,
  cocomo: Cocomo,
  "test-levels": TestLevels,
  jvm: Jvm,
  "thread-lifecycle": ThreadLifecycle,
  "exception-hierarchy": ExceptionHierarchy,
  inheritance: Inheritance,
  "dbms-3tier": Dbms3tier,
  er: Er,
  keys: Keys,
  nf: Nf,
  "ra-join": RaJoin,
  acid: Acid,
  cyberspace: Cyberspace,
  "ids-ips": IdsIps,
  "auth-factors": AuthFactors,
  poem: Poem,
  cdj: Cdj,
  seo: Seo,
  "display-ads": DisplayAds,
};

export function Diagram({ id, className }: { id: string; className?: string }) {
  const Comp = registry[id];
  if (!Comp) return null;
  return <Comp className={className} />;
}
