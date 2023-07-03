/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ image }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
        width: '70px',
        cursor: 'pointer'
      }}
    >
      <Image src={image} alt="quickdial logo" />
    </Link>
  );
}
