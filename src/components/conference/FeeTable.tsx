import { registrationPlans } from "@/data/constants";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function FeeTable() {
  return (
    <div className="rounded-lg border border-border bg-warm-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Currency</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {registrationPlans.map((plan) => (
            <TableRow key={plan.category}>
              <TableCell className="font-medium">{plan.category}</TableCell>
              <TableCell>{plan.price}</TableCell>
              <TableCell>{plan.currency || "—"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="px-4 py-3 text-xs text-muted">
        Historical pamphlet fees are intentionally omitted. Update prices only in src/data/constants.ts after confirmation.
      </p>
    </div>
  );
}
