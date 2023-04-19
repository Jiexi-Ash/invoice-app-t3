import React from "react";

import { useRouter } from "next/router";
import Link from "next/link";

type InvoiceCardProps = {
  id: string;
  paymentDue: string;
  clientName: string;
  status: string;
  total: number;
};

type invoiceProps = {
  invoice: InvoiceCardProps[];
};
type InvoiceCard = {
  invoice: InvoiceCardProps;
};

function Invoice({ invoice }: invoiceProps) {
  return (
    <div className="mx-auto mb-20 mt-8 flex h-full w-full max-w-[672px] flex-col md:mt-14 lg:max-w-[730px]">
      {invoice.map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
}

export default Invoice;

export const InvoiceCard = ({ invoice }: InvoiceCard) => {
  const router = useRouter();

  return (
    <>
      <CardMobile invoice={invoice} />
      <CardLarge invoice={invoice} />
    </>
  );
};

export const Status = ({ status }: { status: string }) => {
  const statusColor =
    status === "paid"
      ? "#33D69F"
      : status === "pending"
      ? "#FF8F00"
      : "#DFE3FA";

  return (
    <div
      className={`${
        status === "paid"
          ? "bg-[#33d69f]/10"
          : status === "pending"
          ? "bg-[#FF8F00]/10"
          : "bg-[#DFE3FA]/10"
      } flex  w-full max-w-[100px] items-center justify-center rounded-lg px-7 py-3`}
    >
      <span
        className={`${
          status === "paid"
            ? "text-[#33D69F]"
            : status === "pending"
            ? "text-[#FF8F00]"
            : "text-lavender"
        } text-xs font-medium capitalize tracking-[-0.25px]`}
      >
        {status}
      </span>
    </div>
  );
};

export const CardMobile = ({ invoice }: InvoiceCard) => {
  return (
    <Link href={`/invoice/${invoice.id}`}>
      <div className="mt-4 flex  flex-col rounded-lg bg-primaryDarkBlue p-6 shadow-md md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xs font-bold text-[#7E88C3]">#</span>
            <span className="text-xs font-bold text-white">{invoice.id}</span>
          </div>
          <div className="text-xs font-medium tracking-[-0.25px] text-white">
            {invoice.clientName}
          </div>
        </div>
        <div className="flex items-center justify-between pt-6">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-medium tracking-[-0.25px] text-lavender">
              Due {invoice.paymentDue}
            </span>

            <span className="text-base font-bold tracking-[-0.25px] text-lavender">
              €{invoice.total.toFixed(2)}
            </span>
          </div>
          <Status status={invoice.status} />
        </div>
      </div>
    </Link>
  );
};

export const CardLarge = ({ invoice }: InvoiceCard) => {
  return (
    <Link href={`/invoice/${invoice.id}`}>
      <div className="mt-4 hidden w-full items-center justify-between rounded-lg bg-primaryDarkBlue px-6 py-7 md:flex">
        <div className="flex items-center">
          <span className="text-xs font-bold text-[#7E88C3]">#</span>
          <span className="text-xs font-bold text-white">{invoice.id}</span>
        </div>
        <div>
          <span className="text-xs font-medium tracking-[-0.25px] text-lavender">
            Due {invoice.paymentDue}
          </span>
        </div>
        <div className="text-xs font-medium tracking-[-0.25px] text-white">
          {invoice.clientName}
        </div>
        <div>
          <span className="text-base font-bold tracking-[-0.25px] text-lavender">
            €{invoice.total.toFixed(2)}
          </span>
        </div>
        <Status status={invoice.status} />
      </div>
    </Link>
  );
};
