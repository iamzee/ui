import { Icon } from '~/components/icons';
import { Button } from '~/components/ui/button';

export default function ButtonRoute() {
  return (
    <div className="p-10 space-y-10">
      <div className="space-x-10">
        <Button>
          <Icon name="solar:cart-large-2-bold" className="w-4 h-4 mr-2" />
          Add to cart
          <Icon
            name="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
        <Button variant="soft">
          <Icon name="solar:cart-large-2-bold" className="w-4 h-4 mr-2" />
          Add to cart
          <Icon
            name="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
        <Button variant="outline">
          <Icon name="solar:cart-large-2-bold" className="w-4 h-4 mr-2" />
          Add to cart
          <Icon
            name="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
        <Button variant="text">
          <Icon name="solar:cart-large-2-bold" className="w-4 h-4 mr-2" />
          Add to cart
          <Icon
            name="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
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
        <Button color="neutral">
          <Icon name="solar:map-point-wave-bold" className="w-4 h-4 mr-2" />
          Share location
          <Icon
            name="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
        <Button color="neutral" variant="soft">
          <Icon name="solar:map-point-wave-bold" className="w-4 h-4 mr-2" />
          Share location
          <Icon
            name="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
        <Button color="neutral" variant="outline">
          <Icon name="solar:map-point-wave-bold" className="w-4 h-4 mr-2" />
          Share location
          <Icon
            name="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
        <Button color="neutral" variant="text">
          <Icon name="solar:map-point-wave-bold" className="w-4 h-4 mr-2" />
          Share location
          <Icon
            name="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
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
      <div className="space-x-10">
        <Button color="error">Error</Button>
        <Button color="error" variant="soft">
          Error
        </Button>
        <Button color="error" variant="outline">
          Error
        </Button>
        <Button color="error" variant="text">
          Error
        </Button>
        <Button color="error" isDisabled>
          Error
        </Button>
        <Button color="error" variant="soft" isDisabled>
          Error
        </Button>
        <Button color="error" variant="outline" isDisabled>
          Error
        </Button>
        <Button color="error" variant="text" isDisabled>
          Error
        </Button>
      </div>
    </div>
  );
}
