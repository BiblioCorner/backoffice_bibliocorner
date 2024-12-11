"use client";

import Table from "@/components/ui/Table";
import { formatText } from "@/utils";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
const LibrariesPage = () => {
  const libraries = [
    {
      id: "1",
      name: "Central Library",
      address: "123 Main St",
      city: "Metropolis",
      postal_code: "12345",
      location: { latitude: 40.7128, longitude: -74.006 },
      website: "http://centrallibrary.com",
      opening_hours: [
        { day: "Monday", open_time: "09:00", close_time: "17:00" },
        { day: "Tuesday", open_time: "09:00", close_time: "17:00" },
        { day: "Wednesday", open_time: "09:00", close_time: "17:00" },
        { day: "Thursday", open_time: "09:00", close_time: "17:00" },
        { day: "Friday", open_time: "09:00", close_time: "17:00" },
      ],
      phone: "123-456-7890",
      fax: "123-456-7891",
      services: [
        "Lending",
        "Reference",
        "Children's Programs",
        "Teen Programs",
        "Computer Access",
        "Study Rooms",
      ],
      accessibility: ["Wheelchair accessible"],
      rating: 4,
    },
    {
      id: "2",
      name: "Westside Branch",
      address: "456 Elm St",
      city: "Metropolis",
      postal_code: "12345",
      location: { latitude: 40.7128, longitude: -74.006 },
      website: "http://westsidebranch.com",
      opening_hours: [
        { day: "Monday", open_time: "10:00", close_time: "18:00" },
        { day: "Tuesday", open_time: "10:00", close_time: "18:00" },
        { day: "Wednesday", open_time: "10:00", close_time: "18:00" },
        { day: "Thursday", open_time: "10:00", close_time: "18:00" },
        { day: "Friday", open_time: "10:00", close_time: "18:00" },
      ],
      phone: "123-456-7892",
      fax: "123-456-7893",
      services: ["Research"],
      accessibility: ["Wheelchair accessible"],
      rating: 4,
    },
  ];
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "Nom",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("address", {
      header: "Adresse",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("city", {
      header: "Ville",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("postal_code", {
      header: "Code postal",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("location", {
      header: "Emplacement",
      cell: (info) =>
        info.getValue().latitude + ", " + info.getValue().longitude,
    }),
    columnHelper.accessor("website", {
      header: "Site web",
      cell: (info) => (
        <Link href={info.getValue()}>{formatText(info.getValue())}</Link>
      ),
    }),
    columnHelper.accessor("opening_hours", {
      header: "Heures d'ouverture",
      cell: (info) => (
        <ul>
          {info.getValue().map((hours) => (
            <li key={hours.day}>
              {hours.day}: {hours.open_time} - {hours.close_time}
            </li>
          ))}
        </ul>
      ),
    }),
    columnHelper.accessor("phone", {
      header: "Téléphone",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("fax", {
      header: "Fax",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("services", {
      header: "Services",
      cell: (info) => (
        <ul>
          {info.getValue().map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      ),
    }),
    columnHelper.accessor("accessibility", {
      header: "Accessibilité",
      cell: (info) => (
        <ul>
          {info.getValue().map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      ),
    }),
    columnHelper.accessor("rating", {
      header: "Évaluation",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Actions", {
      cell: (info) => (
        <div className="flex gap-2">
          <button className="text-blue-500">Modifier</button>
          <button className="text-red-500">Supprimer</button>
        </div>
      ),
    }),
  ];

  return (
    <>
      <h1 className="text-2xl font-bold">Gestion des bibliothèques</h1>

      <Table columns={columns} data={libraries} />
    </>
  );
};

export default LibrariesPage;
