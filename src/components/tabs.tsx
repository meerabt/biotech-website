interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
}

export default function Tabs({ tabs, activeTab, onTabClick }: TabsProps) {
  return (
    <div className="flex gap-6 border-b border-primarylight mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabClick(tab)}
          className={`pb-2 transition-colors ${
            activeTab === tab
              ? "font-medium text-primarydark border-b-2 border-primarydark"
              : "text-primarylight hover:text-primarydark"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
