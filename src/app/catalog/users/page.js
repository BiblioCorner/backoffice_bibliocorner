"use client"

import Table from "@/components/ui/Table";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import React from "react";

const UsersPage = () => {
  const users = [
    {
      id: "1",
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      user_description: "A sample user",
      profile_type: "EMPLOYEE",
      user_role: "ADMIN",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      id: "2",
      first_name: "Jane",
      last_name: "Smith",
      email: "jane.smith@example.com",
      user_description: "Another sample user",
      profile_type: "EMPLOYEE",
      user_role: "USER",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  ];
  const columnHelper = createColumnHelper()
  const columns = [
    columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("first_name", {
        header: "Prénom",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("last_name", {
        header: "Nom",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("user_description", {
        header: "Description",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("profile_type", {
        header: "Type de profil",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("user_role", {
        header: "Rôle",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("linkedin", {
        cell: (info) => <Link href={info.getValue()}>{info.getValue()}</Link>,
    }),
    columnHelper.accessor("Actions", {
        cell: (info) => (
            <div className="flex gap-2">
              <button className="text-blue-500">Modifier</button>
              <button className="text-red-500">Supprimer</button>
            </div>
        ),
    }),
  ]
  return (
    <>
      <h1 className="text-2xl font-bold">Gestion des utilisateurs</h1>
      <Table columns={columns} data={users} />
    </>
  );
};

export default UsersPage;
