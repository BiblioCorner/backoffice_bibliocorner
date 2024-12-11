"use client";

import Table from "@/components/ui/Table";
import { formatDate, formatText } from "@/utils";
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
    {
      id: "3",
      user: { id: "3", name: "Alice Johnson" },
      content: `
      I found this book to be quite enlightening and informative. The author does an excellent job of breaking down complex concepts into easily understandable sections. The narrative is engaging and keeps the reader interested throughout. The book covers a wide range of topics and provides a comprehensive overview of the subject matter. I particularly appreciated the real-world examples and case studies that help to illustrate the key points. Overall, I would highly recommend this book to anyone looking to deepen their understanding of the topic. It is a valuable resource that I will refer back to often.
      `,
      rating_number: 2,
      created_at: new Date(),
      likes_count: 2,
      library: { id: "1", name: "Central Library" },
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
      cell: (info) => formatText(info.getValue()),
    }),
    columnHelper.accessor("rating_number", {
      header: "Note",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("created_at", {
      header: "Date de création",
      cell: (info) => formatDate(info.getValue()),
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
          <button className="text-green-500">Accepter</button>
          <button className="text-red-500">Rejeter</button>
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
