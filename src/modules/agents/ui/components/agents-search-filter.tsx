import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useAgentFilter } from "../../hooks/use-agent-filter";
export const AgentsSearchFilter = () => {
    const [filters, setFilters] = useAgentFilter();
    return (
        <div className="relative">
            <Input
                placeholder="Filter by name"
                value={filters.search}
                className="h-9 bg-white w-[200px] pl-7"
                onChange={(e) => setFilters({ search: e.target.value })}
            />
            <SearchIcon className="absolute size-4 left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
        </div>
    )
}