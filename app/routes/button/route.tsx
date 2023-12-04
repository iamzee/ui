import { Button } from '~/components/ui/button';

export default function ButtonRoute() {
  return (
    <div className="p-10 space-y-10">
      <div className="space-x-10">
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
      <div className="space-x-10">
        <Button color="neutral">Neutral</Button>
        <Button color="neutral" variant="soft">
          Neutral
        </Button>
        <Button color="neutral" variant="outline">
          Neutral
        </Button>
        <Button color="neutral" variant="text">
          Neutral
        </Button>
        <Button color="neutral" isDisabled>
          Neutral
        </Button>
        <Button color="neutral" variant="soft" isDisabled>
          Neutral
        </Button>
        <Button color="neutral" variant="outline" isDisabled>
          Neutral
        </Button>
        <Button color="neutral" variant="text" isDisabled>
          Neutral
        </Button>
      </div>
    </div>
  );
}
