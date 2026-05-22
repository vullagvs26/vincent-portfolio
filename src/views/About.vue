<template>
  <div class="relative lg:px-6">
    <!-- Navigation -->

    <TopNav />

    <BottomNav />

    <!-- Main Container -->
    <div
      class="bg-[#1E1E1F] border border-[#383838] rounded-2xl p-6 md:p-10 shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
    >
      <!-- Title -->
      <div class="mb-6 md:mb-6">
        <h1 class="font-semibold text-[32px] text-[#FAFAFA] leading-normal">
          About
        </h1>
        <div
          class="h-1 w-12 md:w-16 mt-2 rounded"
          style="background: linear-gradient(90deg, #ffda6f, #ffbc5c)"
        ></div>
      </div>

      <!-- About Content -->
      <section class="max-w-4xl mb-4 md:mb-4">
        <p class="text-[15px] font-light text-[#D6D6D6] leading-6 mb-4 md:mb-4">
          Hello! I'm Vincent Vullag, a passionate Web Developer from Philippines
          with expertise in Vue.js, Tailwind CSS, and modern web technologies. I
          love creating beautiful and functional user interfaces.
        </p>

        <p class="text-[15px] font-light text-[#D6D6D6] leading-6 mb-4 md:mb-6">
          With a background in Computer Science and hands-on experience in web
          development, I'm committed to building high-quality applications that
          solve real problems. When I'm not coding, you can find me exploring
          new technologies or doing some video for youtube.
        </p>
      </section>

      <!-- What I'm Doing Section -->
      <section class="mb-12 md:mb-12">
        <h2
          class="font-semibold text-[24px] text-[#FAFAFA] leading-normal mb-6 md:mb-8"
        >
          What I'm Doing
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <ServiceCard
            icon="fa-pen-nib"
            title="Web Design"
            description="The most modern and high-quality design made at a professional level."
          />
          <ServiceCard
            icon="fa-code"
            title="Web Development"
            description="High-quality development of sites at the professional level."
          />
          <ServiceCard
            icon="fa-mobile-alt"
            title="Virtual Assistant"
            description="Providing administrative support, scheduling, and task management to streamline your workflow."
          />
          <ServiceCard
            icon="fa-camera"
            title="YouTube Automation"
            description="Automating video uploads, scheduling, and channel management to grow your YouTube presence efficiently."
          />
        </div>
      </section>

      <!-- Certificates -->
      <section class="mb-12 md:mb-12">
        <h2
          class="font-semibold text-[24px] text-[#FAFAFA] leading-normal mb-6 md:mb-8"
        >
          Certificates
        </h2>

        <p
          class="text-[15px] font-light text-[#D6D6D6] leading-6 mb-6 md:mb-8 max-w-3xl"
        >
          A selection of certifications and training highlights from my
          professional journey.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          <article
            v-for="(certificate, certificateIndex) in certificates"
            :key="`${certificate.title}-${certificate.issuer}`"
            class="overflow-hidden rounded-2xl border border-[#383838] bg-[#202022] shadow-[0_10px_15px_rgba(0,0,0,0.25)]"
          >
            <div
              class="relative aspect-[16/10] overflow-hidden border-b border-[#383838] bg-[#181819]"
            >
              <button
                v-if="getCertificateImages(certificate).length"
                type="button"
                class="group h-full w-full text-left"
                @click="openCertificateModal(certificateIndex)"
              >
                <img
                  :src="
                    getActiveCertificateImage(certificate, certificateIndex)
                  "
                  :alt="certificate.title"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  class="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/75 to-transparent px-4 py-3"
                >
                  <span class="text-[13px] font-medium text-[#FAFAFA]"
                    >Click to enlarge</span
                  >
                  <span
                    v-if="getCertificateImages(certificate).length > 1"
                    class="rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[12px] text-[#FAFAFA]"
                  >
                    {{
                      (certificateImageIndexes[certificateIndex] ?? 0) + 1
                    }}/{{ getCertificateImages(certificate).length }}
                  </span>
                </div>
              </button>
              <div
                v-else
                class="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,219,112,0.22),_transparent_55%),linear-gradient(135deg,_#242426,_#181819)] px-6 text-center"
              >
                <div>
                  <p class="text-[16px] font-medium text-[#FAFAFA]">
                    Certificate preview
                  </p>
                  <p class="mt-2 text-[13px] leading-6 text-[#B8B8B8]">
                    Add your certificate image path in the data below to show
                    the actual picture.
                  </p>
                </div>
              </div>

              <div
                v-if="getCertificateImages(certificate).length > 1"
                class="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-3"
              >
                <button
                  type="button"
                  class="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/45 text-[#FAFAFA] transition hover:bg-black/65"
                  @click.stop="
                    changeCertificateImage(certificateIndex, -1, certificate)
                  "
                >
                  <i class="fas fa-chevron-left text-[12px]"></i>
                </button>
                <button
                  type="button"
                  class="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/45 text-[#FAFAFA] transition hover:bg-black/65"
                  @click.stop="
                    changeCertificateImage(certificateIndex, 1, certificate)
                  "
                >
                  <i class="fas fa-chevron-right text-[12px]"></i>
                </button>
              </div>
            </div>

            <div class="p-5 md:p-6">
              <div class="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p class="text-[18px] font-medium text-[#FAFAFA] leading-7">
                    {{ certificate.title }}
                  </p>
                  <p class="text-[14px] text-[#ffdb70] mt-1">
                    {{ certificate.issuer }}
                  </p>
                </div>
                <span
                  class="shrink-0 rounded-full border border-[#4b4b4b] px-3 py-1 text-[12px] text-[#D6D6D6]"
                >
                  {{ certificate.date }}
                </span>
              </div>

              <p class="text-[14px] font-light text-[#D6D6D6] leading-6 mb-4">
                {{ certificate.description }}
              </p>

              <div
                v-if="getCertificateImages(certificate).length > 1"
                class="mb-4 flex flex-wrap gap-2"
              >
                <button
                  v-for="(image, imageIndex) in getCertificateImages(
                    certificate,
                  )"
                  :key="`${certificate.title}-${imageIndex}`"
                  type="button"
                  class="h-14 w-20 overflow-hidden rounded-lg border transition"
                  :class="
                    (certificateImageIndexes[certificateIndex] ?? 0) ===
                    imageIndex
                      ? 'border-[#ffdb70]'
                      : 'border-[#3b3b3d] hover:border-[#6b6b6d]'
                  "
                  @click="setCertificateImage(certificateIndex, imageIndex)"
                >
                  <img
                    :src="image"
                    :alt="`${certificate.title} preview ${imageIndex + 1}`"
                    class="h-full w-full object-cover"
                  />
                </button>
              </div>

              <a
                v-if="certificate.link"
                :href="certificate.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-[14px] font-medium text-[#ffdb70] hover:text-[#ffe6a6] transition-colors duration-300"
              >
                View certificate
                <i class="fas fa-arrow-up-right-from-square text-[12px]"></i>
              </a>
            </div>
          </article>
        </div>
      </section>

      <!-- My Tools -->
      <section>
        <h2
          class="font-semibold text-[24px] text-[#FAFAFA] leading-normal mb-6 md:mb-8"
        >
          My Tools
        </h2>

        <div class="flex flex-wrap gap-4 text-gray-300">
          <div
            v-for="tool in tools"
            :key="tool.name"
            class="flex flex-col items-center"
          >
            <img
              :src="tool.img"
              alt=""
              class="h-12 md:h-16 w-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>

    <div
      v-if="activeModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
      @click.self="closeCertificateModal"
    >
      <div
        class="relative w-full max-w-5xl rounded-3xl border border-[#383838] bg-[#1E1E1F] p-4 md:p-6 shadow-[0_25px_50px_rgba(0,0,0,0.45)]"
      >
        <button
          type="button"
          class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-[#FAFAFA] transition hover:bg-black/65"
          @click="closeCertificateModal"
        >
          <i class="fas fa-xmark"></i>
        </button>

        <div
          class="mb-4 flex flex-col gap-2 pr-12 md:flex-row md:items-start md:justify-between"
        >
          <div>
            <h3 class="text-[22px] font-semibold text-[#FAFAFA]">
              {{ activeModal.certificate.title }}
            </h3>
            <p class="text-[14px] text-[#ffdb70]">
              {{ activeModal.certificate.issuer }}
            </p>
          </div>
          <span class="text-[13px] text-[#B8B8B8]">{{
            activeModal.certificate.date
          }}</span>
        </div>

        <div
          class="relative overflow-hidden rounded-2xl border border-[#383838] bg-[#111112]"
        >
          <img
            :src="activeModal.image"
            :alt="activeModal.certificate.title"
            class="max-h-[75vh] w-full object-contain"
          />

          <div
            v-if="activeModal.images.length > 1"
            class="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-3 md:px-4"
          >
            <button
              type="button"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-[#FAFAFA] transition hover:bg-black/65"
              @click="changeModalImage(-1)"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            <button
              type="button"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-[#FAFAFA] transition hover:bg-black/65"
              @click="changeModalImage(1)"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div
          class="mt-4 flex flex-wrap gap-2"
          v-if="activeModal.images.length > 1"
        >
          <button
            v-for="(image, imageIndex) in activeModal.images"
            :key="`${activeModal.certificate.title}-modal-${imageIndex}`"
            type="button"
            class="h-16 w-24 overflow-hidden rounded-lg border transition"
            :class="
              activeModal.imageIndex === imageIndex
                ? 'border-[#ffdb70]'
                : 'border-[#3b3b3d] hover:border-[#6b6b6d]'
            "
            @click="setModalImage(imageIndex)"
          >
            <img
              :src="image"
              :alt="`${activeModal.certificate.title} enlarged preview ${imageIndex + 1}`"
              class="h-full w-full object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import vscode from "@/assets/my-tools/vscode.png";
import html from "@/assets/my-tools/html.png";
import css from "@/assets/my-tools/css3.jpg";
import javascript from "@/assets/my-tools/javascript.png";
import vue from "@/assets/my-tools/vue.png";
import tailwind from "@/assets/my-tools/tailwind.png";
import figma from "@/assets/my-tools/figma.png";
import git from "@/assets/my-tools/git.png";
import php from "@/assets/my-tools/php.png";
import laravel from "@/assets/my-tools/laravel.png";
import mysql from "@/assets/my-tools/mysql.png";
import postgre from "@/assets/my-tools/postgre.png";
import oracle from "@/assets/my-tools/oracle.png";
import premierePro from "@/assets/my-tools/premiere-pro.png";
import photoshop from "@/assets/my-tools/photoshop.png";
import sonyvegas from "@/assets/my-tools/sonyvegas.png";
import youtube from "@/assets/my-tools/youtube.png";
import { ref, computed } from "vue";

import { defineAsyncComponent } from "vue";

const TopNav = defineAsyncComponent(() => import("../components/TopNav.vue"));
const BottomNav = defineAsyncComponent(() => import("../components/BottomNav.vue"));
const ServiceCard = defineAsyncComponent(() => import("../components/ServiceCard.vue"));

import udemyCertificate from "../assets/certificates/Udemy.png";
import splunkCertificate0 from "../assets/certificates/splunk0.png";
import splunkCertificate1 from "../assets/certificates/splunk1.png";
import splunkCertificate2 from "../assets/certificates/splunk2.png";
import splunkCertificate3 from "../assets/certificates/splunk3.png";
import splunkCertificate4 from "../assets/certificates/japan.JPEG";


const certificates = [
  {
    title: "Full Stack Web Development Bootcamp",
    issuer: "Udemy by Dr. Angela Yu",
    date: "2024",
    description:
      "I became interested in web development and started learning online to grow my skills and build a stronger career path in tech. This bootcamp helped me strengthen my foundation in front-end and back-end development through hands-on projects and practical lessons.",
    images: [udemyCertificate],
    link: "",
  },
  {
    title: "Splunk Certifications",
    issuer: "Fujitsu Japan | Splunk",
    date: "2024",
    description:
      "In 2024, while working as a Developer at Fujitsu, I was selected to train in Japan for Splunk and data analysis. The goal was to support the planned implementation at Fujitsu Philippines and help build dashboards for warehouse and inventory monitoring.",
    images: [
      splunkCertificate0,
      splunkCertificate1,
      splunkCertificate2,
      splunkCertificate3,
      splunkCertificate4,
    ],
    link: "",
  },
];

const certificateImageIndexes = ref({});
const activeModalState = ref(null);

const getCertificateImages = (certificate) => certificate.images ?? [];

const setCertificateImage = (certificateIndex, imageIndex) => {
  certificateImageIndexes.value = {
    ...certificateImageIndexes.value,
    [certificateIndex]: imageIndex,
  };
};

const changeCertificateImage = (certificateIndex, direction, certificate) => {
  const images = getCertificateImages(certificate);

  if (!images.length) return;

  const currentIndex = certificateImageIndexes.value[certificateIndex] ?? 0;
  const nextIndex = (currentIndex + direction + images.length) % images.length;

  setCertificateImage(certificateIndex, nextIndex);
};

const getActiveCertificateImage = (certificate, certificateIndex) => {
  const images = getCertificateImages(certificate);
  const currentIndex = certificateImageIndexes.value[certificateIndex] ?? 0;

  return images[currentIndex] ?? "";
};

const openCertificateModal = (certificateIndex) => {
  const certificate = certificates[certificateIndex];
  const images = getCertificateImages(certificate);

  if (!images.length) return;

  activeModalState.value = {
    certificateIndex,
    imageIndex: certificateImageIndexes.value[certificateIndex] ?? 0,
  };
};

const closeCertificateModal = () => {
  activeModalState.value = null;
};

const setModalImage = (imageIndex) => {
  if (!activeModalState.value) return;

  activeModalState.value = {
    ...activeModalState.value,
    imageIndex,
  };
  setCertificateImage(activeModalState.value.certificateIndex, imageIndex);
};

const changeModalImage = (direction) => {
  if (!activeModalState.value) return;

  const certificate = certificates[activeModalState.value.certificateIndex];
  const images = getCertificateImages(certificate);
  const nextIndex =
    (activeModalState.value.imageIndex + direction + images.length) %
    images.length;

  setModalImage(nextIndex);
};

const activeModal = computed(() => {
  if (!activeModalState.value) return null;

  const certificate = certificates[activeModalState.value.certificateIndex];
  const images = getCertificateImages(certificate);
  const image = images[activeModalState.value.imageIndex] ?? images[0];

  return {
    certificate,
    images,
    image,
    imageIndex: activeModalState.value.imageIndex,
  };
});

const tools = [
  { img: vscode },
  { img: html },
  { img: css },
  { img: javascript },
  { img: "/assets/my-tools/vuejs.png" },
  { img: "/assets/my-tools/react.png" },
  { img: vue },
  { img: tailwind },
  { img: figma },
  { img: git },
  { img: "/assets/my-tools/docker.png" },
  { img: "/assets/my-tools/aws.png" },
  { img: php },
  { img: laravel },
  { img: mysql },
  { img: postgre },
  { img: oracle },
  { img: "/assets/my-tools/splunk.png" },
  { img: premierePro },
  { img: photoshop },
  { img: sonyvegas },
  { img: youtube },
];
</script>
