import { Device } from "@/api/api.ts";
import { DeviceImage } from "@/App/Devices/DeviceImage.tsx";
import { Box, Card, Grid, lighten, Text } from "@mantine/core";

interface Props {
  devices: Device[];
}

export function DevicesGrid({ devices }: Props) {
  return (
    <Box>
        <Text c={"#bdbdbd"} size="xs" >{devices.length} devices</Text>
      <Grid>
        {devices.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </Grid>
    </Box>
  );
}

interface CardProps {
  device: Device;
}

function DeviceCard({ device }: CardProps) {
  return (
    <Grid.Col span={{ base: 8, md: 4, lg: 2 }}>
      <Card padding="lg" mt={15} w={250} radius="md" withBorder>
        <Card.Section ta="center" bg={"#f6f6f8"}>
          <DeviceImage device={device} size="md" />
        </Card.Section>
        <Text size="sm" c={lighten("#000000", 0.35)}>
          {device.product.name}
        </Text>
        <Text size="sm" c={lighten("#000000", 0.55)}>
          {device.line.name}
        </Text>
      </Card>
    </Grid.Col>
  );
}
