"use client";

import Table from "@/components/ui/Table";
import { createColumnHelper } from "@tanstack/react-table";

const ReviewsPage = () => {
  const reviews = [
    {
      id: "1",
      user: { id: "1", name: "John Doe" },
      content: "Great book!",
      rating_number: 5,
      created_at: new Date(),
      likes_count: 10,
      library: { id: "1", name: "Central Library" },
    },
    {
      id: "2",
      user: { id: "2", name: "Jane Smith" },
      content: "Not bad.",
      rating_number: 3,
      created_at: new Date(),
      likes_count: 5,
      library: { id: "2", name: "Westside Library" },
    },
  ];

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("user", {
      header: "Utilisateur",
      cell: (info) => info.getValue().name,
    }),
    columnHelper.accessor("content", {
      header: "Contenu",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("rating_number", {
      header: "Note",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("created_at", {
      header: "Date de création",
      cell: (info) => info.getValue().toLocaleDateString(),
    }),
    columnHelper.accessor("likes_count", {
      header: "Nombre de likes",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("library", {
      header: "Bibliothèque",
      cell: (info) => info.getValue().name,
    }),
    columnHelper.accessor("actions", {
      header: "Actions",
      cell: (info) => (
        <div className="flex gap-2">
          <button className="text-blue-500">Avertir</button>
          <button className="text-red-500">Supprimer</button>
        </div>
      ),
    }),
  ];
  return (
    <>
      <h1 className="text-2xl font-bold">Gestion des avis</h1>
      <Table columns={columns} data={reviews} />
    </>
  );
};

export default ReviewsPage;
