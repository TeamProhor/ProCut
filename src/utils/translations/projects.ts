export const projectsTranslations = {
  en: {
    header: {
      home: "Home",
      allProjects: "All projects",
      gridView: "Grid view",
      listView: "List view",
      searchPlaceholder: "Search...",
      newProject: "New project",
      new: "New",
    },
    toolbar: {
      selectAll: "Select all",
      sort: {
        createdAt: "Created",
        updatedAt: "Modified",
        name: "Name",
        duration: "Duration",
      },
      sortAscending: "Sort ascending",
      sortDescending: "Sort descending",
    },
    actions: {
      duplicate: "Duplicate",
      delete: "Delete",
      rename: "Rename",
      info: "Info",
    },
    item: {
      created: "Created {date}",
      projectMenu: "Project menu",
      thumbnailAlt: "Project thumbnail",
    },
    emptyStates: {
      noResults: "No results found",
      noResultsDescription:
        'Your search for "{query}" did not return any results.',
      clearSearch: "Clear search",
      noProjects: "No projects yet",
      noProjectsDescription:
        "Start creating your first project. Import media, edit, and export your videos. All privately.",
      createFirstProject: "Create your first project",
    },
    messages: {
      errorCreate: "Failed to create project",
      tryAgain: "Please try again",
    },
    dialogs: {
      delete: {
        titleSingle: "Delete '{name}'?",
        titleMultiple: "Delete {count} projects?",
        warning: "Warning",
        descriptionSingle:
          'This will permanently delete "{name}" and all associated files.',
        descriptionMultiple:
          "This will permanently delete {count} projects and all associated files.",
        confirmInstruction: 'Type "DELETE" to confirm',
        confirmPlaceholder: "DELETE",
        cancel: "Cancel",
        submit: "Delete project",
      },
      rename: {
        title: "Rename project",
        label: "New name",
        placeholder: "Enter a new name",
        cancel: "Cancel",
        submit: "Rename",
      },
      info: {
        duration: "Duration",
        created: "Created",
        modified: "Modified",
        projectId: "Project ID",
        close: "Close",
        done: "Done",
      },
    },
  },
  bn: {
    header: {
      home: "হোম",
      allProjects: "সকল প্রজেক্ট",
      gridView: "গ্রিড ভিউ",
      listView: "লিস্ট ভিউ",
      searchPlaceholder: "খুঁজুন...",
      newProject: "নতুন প্রজেক্ট",
      new: "নতুন",
    },
    toolbar: {
      selectAll: "সব নির্বাচন করুন",
      sort: {
        createdAt: "তৈরি করা হয়েছে",
        updatedAt: "পরিবর্তন করা হয়েছে",
        name: "নাম",
        duration: "সময়কাল",
      },
      sortAscending: "ঊর্ধ্বমুখী সাজান",
      sortDescending: "নিম্নমুখী সাজান",
    },
    actions: {
      duplicate: "ডুপ্লিকেট",
      delete: "মুছে ফেলুন",
      rename: "নাম পরিবর্তন করুন",
      info: "তথ্য",
    },
    item: {
      created: "তৈরি হয়েছে {date}",
      projectMenu: "প্রজেক্ট মেনু",
      thumbnailAlt: "প্রজেক্ট থাম্বনেইল",
    },
    emptyStates: {
      noResults: "কোনো ফলাফল পাওয়া যায়নি",
      noResultsDescription: '"{query}" এর জন্য কোনো ফলাফল পাওয়া যায়নি।',
      clearSearch: "সার্চ ক্লিয়ার করুন",
      noProjects: "এখনও কোনো প্রজেক্ট নেই",
      noProjectsDescription:
        "আপনার প্রথম প্রজেক্ট তৈরি শুরু করুন। মিডিয়া ইম্পোর্ট করুন, এডিট করুন এবং এক্সপোর্ট করুন। সবই ব্যক্তিগতভাবে।",
      createFirstProject: "আপনার প্রথম প্রজেক্ট তৈরি করুন",
    },
    messages: {
      errorCreate: "প্রজেক্ট তৈরি করতে ব্যর্থ হয়েছে",
      tryAgain: "দয়া করে আবার চেষ্টা করুন",
    },
    dialogs: {
      delete: {
        titleSingle: "'{name}' মুছে ফেলবেন?",
        titleMultiple: "{count}টি প্রজেক্ট মুছে ফেলবেন?",
        warning: "সতর্কতা",
        descriptionSingle:
          'এটি চিরতরে "{name}" এবং এর সাথে সম্পর্কিত সকল ফাইল মুছে ফেলবে।',
        descriptionMultiple:
          "এটি চিরতরে {count}টি প্রজেক্ট এবং এর সাথে সম্পর্কিত সকল ফাইল মুছে ফেলবে।",
        confirmInstruction: 'নিশ্চিত করতে "DELETE" লিখুন',
        confirmPlaceholder: "DELETE",
        cancel: "বাতিল",
        submit: "প্রজেক্ট মুছে ফেলুন",
      },
      rename: {
        title: "প্রজেক্টের নাম পরিবর্তন করুন",
        label: "নতুন নাম",
        placeholder: "একটি নতুন নাম দিন",
        cancel: "বাতিল",
        submit: "নাম পরিবর্তন করুন",
      },
      info: {
        duration: "সময়কাল",
        created: "তৈরি করা হয়েছে",
        modified: "পরিবর্তন করা হয়েছে",
        projectId: "প্রজেক্ট আইডি",
        close: "বন্ধ করুন",
        done: "সম্পন্ন",
      },
    },
  },
} as const;

export type ProjectsTranslations = typeof projectsTranslations.en;
