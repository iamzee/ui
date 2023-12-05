// import { Icon } from '~/components/icons';
import { Button } from '~/components/ui/button';
import { Icon } from '@iconify/react';

export default function ButtonRoute() {
  return (
    <div className="p-10 space-y-10">
      <div className="space-x-10">
        <Button>
          <Icon icon="solar:cart-large-2-bold" className="w-4 h-4 mr-2" />
          Add to cart
          <Icon
            icon="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
        <Button variant="soft">
          <Icon icon="solar:cart-large-2-bold" className="w-4 h-4 mr-2" />
          Add to cart
          <Icon
            icon="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
        <Button variant="outline">
          <Icon icon="solar:cart-large-2-bold" className="w-4 h-4 mr-2" />
          Add to cart
          <Icon
            icon="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
        <Button variant="text">
          <Icon icon="solar:cart-large-2-bold" className="w-4 h-4 mr-2" />
          Add to cart
          <Icon
            icon="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
      </div>
      <div className="space-x-10">
        <Button color="neutral">
          <Icon icon="solar:map-point-wave-bold" className="w-4 h-4 mr-2" />
          Share location
          <Icon
            icon="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
        <Button color="neutral" variant="soft">
          <Icon icon="solar:map-point-wave-bold" className="w-4 h-4 mr-2" />
          Share location
          <Icon
            icon="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
        <Button color="neutral" variant="outline">
          <Icon icon="solar:map-point-wave-bold" className="w-4 h-4 mr-2" />
          Share location
          <Icon
            icon="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
        <Button color="neutral" variant="text">
          <Icon icon="solar:map-point-wave-bold" className="w-4 h-4 mr-2" />
          Share location
          <Icon
            icon="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
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
