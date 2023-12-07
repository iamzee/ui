import { Heading } from '~/components/ui/heading';

export default function TypographyRoute() {
  return (
    <div>
      <Heading level={1}>The quick brown fox jumps over the lazy dog</Heading>
      <Heading level={2}>The quick brown fox jumps over the lazy dog</Heading>
      <Heading level={3}>The quick brown fox jumps over the lazy dog</Heading>
      <Heading level={4}>The quick brown fox jumps over the lazy dog</Heading>
      <Heading level={1} color="normal">
        The quick brown fox jumps over the lazy dog
      </Heading>
      <Heading level={2} color="normal">
        The quick brown fox jumps over the lazy dog
      </Heading>
      <Heading level={3} color="normal">
        The quick brown fox jumps over the lazy dog
      </Heading>
      <Heading level={4} color="normal">
        The quick brown fox jumps over the lazy dog
      </Heading>
      <Heading level={1} color="soft">
        The quick brown fox jumps over the lazy dog
      </Heading>
      <Heading level={2} color="soft">
        The quick brown fox jumps over the lazy dog
      </Heading>
      <Heading level={3} color="soft">
        The quick brown fox jumps over the lazy dog
      </Heading>
      <Heading level={4} color="soft">
        The quick brown fox jumps over the lazy dog
      </Heading>
    </div>
  );
}
