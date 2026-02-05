<template>
  <div class="relative lg:px-6">
    <!-- Top Navigation -->
    <TopNav />
    <BottomNav />

    <!-- Main Container with background and border -->
    <div
      class="resume-content bg-[#1E1E1F] border border-[#383838] rounded-2xl p-6 md:p-10 shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
    >
      <!-- Page Title with Export Button -->
      <div class="mb-8 md:mb-12 flex items-center gap-4">
        <div>
          <h1 class="font-semibold text-[32px] text-[#FAFAFA] leading-normal">Resume</h1>
          <div
            class="h-1 w-12 md:w-16 mt-2 rounded"
            style="background: linear-gradient(90deg, #ffda6f, #ffbc5c)"
          ></div>
        </div>
        <button
          @click="exportResume"
          class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#2a2a2a] transition-all duration-300 group"
          title="Export Resume as PDF"
          style="
            background: linear-gradient(90deg, #ffda6f, #ffbc5c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          "
        >
          <span class="text-sm font-medium">Export</span>
          <i class="fas fa-file-pdf"></i>
        </button>
      </div>

      <!-- Experience Section -->
      <section class="mt-8 md:mt-12 mb-12 md:mb-20">
        <h2
          class="font-semibold text-[24px] md:text-[24px] text-[rgb(250,250,250)] mb-6 md:mb-8 flex items-center gap-2 md:gap-3"
        >
          <span
            class="w-[46px] h-[46px] flex items-center justify-center bg-[#202022] rounded-xl border-[#555555]"
            style="box-shadow: 0 0 12px rgba(0, 0, 0, 0.3)"
          >
            <i class="fas fa-terminal text-[rgb(255,219,112)] text-sm"></i>
          </span>
          Experience
        </h2>

        <div class="space-y-0">
          <ResumeCard v-for="item in experience" :key="item.title" :item="item" />
        </div>
      </section>

      <!-- Education Section -->
      <section class="mt-8 md:mt-12">
        <h2
          class="font-semibold text-[24px] md:text-[24px] text-[rgb(250,250,250)] mb-6 md:mb-8 flex items-center gap-2 md:gap-3"
        >
          <span
            class="w-[46px] h-[46px] flex items-center justify-center bg-[#202022] rounded-xl border-[#555555]"
            style="box-shadow: 0 0 12px rgba(0, 0, 0, 0.3)"
          >
            <i class="fas fa-graduation-cap text-[rgb(255,219,112)] text-sm"></i>
          </span>
          Education
        </h2>

        <!-- Timeline -->
        <div class="space-y-0">
          <ResumeCard v-for="item in education" :key="item.title" :item="item" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import ResumeCard from "../components/ResumeCard.vue";
import TopNav from "../components/TopNav.vue";
import BottomNav from "../components/BottomNav.vue";

const exportResume = () => {
  const link = document.createElement("a");
  link.href = "/vincent-portfolio/assets/Resume_Vullag.pdf";
  link.download = "Resume_Vullag.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Function to calculate months/years from start date to today
const getDuration = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let months =
    (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth()) + 1 ;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  let result = "";

  if (years > 0) result += `${years} yr${years > 1 ? "s" : ""}`;
  if (remainingMonths > 0)
    result += `${years > 0 ? " " : ""}${remainingMonths} mo${
      remainingMonths > 1 ? "s" : ""
    }`;

  return result || "0 mos";
};

// Month name formatter (June 2024)
const formatMonthYear = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleString("en-US", { month: "long", year: "numeric" });
};

const education = [
  {
    title: "BS Computer Science @ NU Laguna",
    date: "2019 — 2023",
    description:
      "Completed a Bachelor of Science in Computer Science at NU Laguna, focusing on software engineering, system development, and modern computing principles. Gained hands-on experience in programming, database management, and application development, preparing for professional roles in the IT industry.",
  },
];

const experience = [
  {
    title: "System Developer @ Fujitsu",
    date: `${formatMonthYear("2024-06-01")} — Present · ${getDuration("2024-06-01")}`,
    description:
      "Developing and maintaining manufacturing and business systems, analyzing technical requirements, coding and testing, troubleshooting issues, maintaining databases and system documentation, providing technical support and end-user training, and ensuring system security and performance. Also supports IT improvements, system upgrades, and compliance with QMS, EMS, CSR, and safety regulations.",
    logo: "/vincent-portfolio/assets/fujitsu.png",
  },

  {
    title: "IT Consultant @ Cuatrix",
    date: "June 2023 — Feb 2024 · 8 mos",
    description:
      "Handled SAP front-end troubleshooting by managing and resolving incidents through ServiceNow, documenting solutions for future reference, and creating accurate incident reports. Leveraged artificial intelligence, machine learning, and available self-service tools to quickly find relevant answers and resolve issues independently, while also utilizing real-time support channels for direct access to SAP experts.",
  },
  {
    title: "Internship @ Hacktiv Colab Inc.",
    date: "Jan 2023 — April 2023 · 4 mos",
    description:
      "Worked on the Microsoft Power Platform, primarily developing and customizing solutions using Power Apps. Assisted in building applications to streamline business processes, automate workflows, and enhance overall productivity during the 4-month internship.",
  },
];
</script>
