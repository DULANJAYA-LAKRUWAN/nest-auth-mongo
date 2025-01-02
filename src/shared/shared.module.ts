import { Module } from '@nestjs/common';
import { BlacklistService } from './blacklist.service';

@Module({
  providers: [BlacklistService],
  exports: [BlacklistService], // Export to make it available for other modules
})
export class SharedModule {}
