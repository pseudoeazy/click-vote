import Link from "next/link";
import socials from "constants/social";

const SocialIcons = () => {
  return (
    <div className="flex justify-end space-x-6">
      {socials.map(({ path, icon: Icon }, idx) => (
        <Link
          href={`#${path}`}
          key={idx}
          className="hover:border hover:rounded w-8 h-8 flex items-center justify-center"
        >
          {<Icon />}
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
