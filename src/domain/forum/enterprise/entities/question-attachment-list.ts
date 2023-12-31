import { WatchedList } from '@/core/entities/watched-list'

import { QuestionAttachment } from './question-attachment'

export class QuestionAttachmentList extends WatchedList<QuestionAttachment> {
  protected compareItems(a: QuestionAttachment, b: QuestionAttachment) {
    return a.attachmentId.equals(b.attachmentId)
  }
}
