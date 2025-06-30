"use client";

import { deleteIcon, eyeSingleIcon } from "@/asserts/icons";
import { Card } from "@/components/ui/Card";
import { RootState } from "@/redux";
import { useSelector } from "react-redux";

export default function ContractLists() {
  const { contactList } = useSelector((state: RootState) => state.contactList);

  return (
    <Card>
      <div className="">
        <h2>Contacts / Navettes</h2>

        <div className="max-h-[17rem] min-h-[17rem] overflow-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th className="text-center">Role</th>
                <th className="text-center">Access Permissions</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {contactList.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td className="text-center">{contact.role}</td>
                  <td className="text-center">{contact.accessPermission}</td>
                  <td className="text-center flex-center space-x-3">
                    <button className="edit-button">{eyeSingleIcon}</button>
                    <button className="delete-button">{deleteIcon}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}
