import { Button } from '~/components/ui/button';

export default function ButtonRoute() {
  return (
    <div className="p-10 space-x-10">
      <Button>Brand</Button>
      <Button variant="soft">Brand</Button>
      <Button variant="outline">Brand</Button>
      <Button variant="text">Brand</Button>
      <Button isDisabled>Brand</Button>
      <Button variant="soft" isDisabled>
        Brand
      </Button>
      <Button variant="outline" isDisabled>
        Brand
      </Button>
      <Button variant="text" isDisabled>
        Brand
      </Button>
    </div>
  );
}
