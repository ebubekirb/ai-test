interface SidebarSectionProps {
  label: string;
  items: string[];
}

const SidebarSection = ({ label, items }: SidebarSectionProps) => (
  <div>
    <div className='px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider'>
      {label}
    </div>
    <ul className='space-y-1 mt-1'>
      {items.map((item, idx) => (
        <li key={item + idx}>
          <button className='w-full text-left px-2 py-1 rounded hover:bg-muted text-sm'>
            {item}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default SidebarSection;
