import { Button } from '~/components/ui/button';
import { Icon } from '@iconify/react';
import { Heading } from '~/components/ui/heading';
import { Text } from '~/components/ui/text';

export default function ButtonRoute() {
  return (
    <div className="space-y-10">
      <Heading level={2}>Button</Heading>
      <Text elementType="p" color="normal" className="text-xl">
        A button allows a user to perform an action, with mouse, touch, and
        keyboard interactions.
      </Text>
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
        <Button color="error">
          <Icon
            icon="solar:trash-bin-minimalistic-2-bold"
            className="w-4 h-4 mr-2"
          />
          Delete
          <Icon
            icon="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
        <Button color="error" variant="soft">
          <Icon
            icon="solar:trash-bin-minimalistic-2-bold"
            className="w-4 h-4 mr-2"
          />
          Delete
          <Icon
            icon="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
        <Button color="error" variant="outline">
          <Icon
            icon="solar:trash-bin-minimalistic-2-bold"
            className="w-4 h-4 mr-2"
          />
          Delete
          <Icon
            icon="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
        <Button color="error" variant="text">
          <Icon
            icon="solar:trash-bin-minimalistic-2-bold"
            className="w-4 h-4 mr-2"
          />
          Delete
          <Icon
            icon="solar:round-alt-arrow-right-bold"
            className="w-4 h-4 ml-2"
          />
        </Button>
      </div>
    </div>
  );
}
