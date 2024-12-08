"use client";
import Table from "@/components/ui/Table";
import { formatDate, formatText } from "@/utils";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import React from "react";

const EventsPage = () => {
  const events = [
    {
      id: "1",
      name: "Book Reading",
      description: "An event for book lovers",
      date: "2023-10-01",
      start_time: "10:00",
      end_time: "12:00",
      library_id: "lib123",
      address: "123 Library St.",
      register_link: "http://example.com/register",
    },
    {
      id: "2",
      name: "Author Meet and Greet",
      description: "Meet your favorite authors",
      date: "2023-10-05",
      start_time: "14:00",
      end_time: "16:00",
      library_id: "lib456",
      address: "456 Library Ave.",
      register_link: "http://example.com/register",
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
    columnHelper.accessor("description", {
      header: "Description",
      cell: (info) => formatText(info.getValue()),
    }),
    columnHelper.accessor("date", {
      header: "Date",
      cell: (info) => formatDate(info.getValue()),
    }),
    columnHelper.accessor("start_time", {
      header: "Heure de début",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("end_time", {
      header: "Heure de fin",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("library_id", {
      header: "Bibliothèque",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("address", {
      header: "Adresse",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("register_link", {
      header: "Lien d'inscription",
      cell: (info) => <Link href={info.getValue()}>{info.getValue()}</Link>,
    }),
  ];
  return (
    <>
      <h1 className="text-2xl font-bold">Gestion des évènements</h1>
      <Table columns={columns} data={events} />
    </>
  );
};

export default EventsPage;
