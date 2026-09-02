import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  features: string[];
  image?: string;
  icon?: ReactNode;
};

export function ServiceCard({
  title,
  description,
  features,
  image,
  icon,
}: ServiceCardProps) {
  return (
    <article className="max-w-100 overflow-hidden rounded-lg bg-gray-100">
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      )}

      <div className="p-6 flex flex-col">
        <div className="mb-4 flex items-center gap-3">
          {icon && <span className="text-3xl">{icon}</span>}
          <h3 className="font-inter text-2xl font-bold">{title}</h3>
        </div>

        <p className="mb-6 text-content">{description}</p>

        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="font-bold text-red-600">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
