import Link from "next/link";
import socials from "constants/social";

const SocialIcons = () => {
  return (
    <div className="flex justify-end space-x-6">
      {socials.map(({ path, icon: Icon }, idx) => (
        <Link href={`#${path}`}>{<Icon />}</Link>
      ))}
    </div>
  );
};

export default SocialIcons;
